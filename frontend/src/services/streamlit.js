let sendRequest;
let active;
let tail = Promise.resolve();
let sequence = 0;

export function connectStreamlit(send, reply) {
  sendRequest = send;
  if (!active || reply?.id !== active.id) return;
  const request = active;
  active = null;
  if (reply.error) {
    const error = new Error(reply.error.detail);
    error.response = { status: reply.error.status, data: { detail: reply.error.detail } };
    request.reject(error);
  } else {
    request.resolve(reply.data);
  }
}

export function requestStreamlit(action, params, signal) {
  // Streamlit runs the Python script once per request. Keep only one in flight.
  const result = tail.then(() => new Promise((resolve, reject) => {
    signal?.throwIfAborted();
    if (!sendRequest) throw new Error('Streamlit is not connected.');
    const id = Date.now() + '-' + ++sequence;
    active = { id, resolve, reject };
    try {
      sendRequest('request', { id, action, params });
    } catch (error) {
      active = null;
      reject(error);
    }
  }));
  tail = result.catch(() => {});
  return result;
}
