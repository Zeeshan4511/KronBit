import { useCallback, useEffect, useRef, useState } from 'react';
import { errorMessage } from './api';

export function useRequest(initialData = null) {
  const [state, setState] = useState({ data: initialData, pending: false, kind: '', error: '' });
  const current = useRef(null);

  const run = useCallback(async (request, kind = 'load') => {
    if (current.current) return;
    const controller = new AbortController();
    current.current = controller;
    setState((previous) => ({ ...previous, pending: true, kind, error: '' }));
    try {
      const data = await request(controller.signal);
      if (!controller.signal.aborted) setState({ data, pending: false, kind, error: '' });
    } catch (error) {
      if (!controller.signal.aborted) {
        setState((previous) => ({ ...previous, pending: false, kind, error: errorMessage(error) }));
      }
    } finally {
      if (current.current === controller) current.current = null;
    }
  }, []);

  useEffect(() => () => {
    current.current?.abort();
    current.current = null;
  }, []);

  return { ...state, run };
}
