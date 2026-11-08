import axios from 'axios';

const baseURL = (import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000').replace(/\/+$/, '');
const client = axios.create({ baseURL });

export const apiDocs = baseURL + '/docs';

export const api = {
  history: async (signal) => (await client.get('/api/market/history', { params: { days: 600 }, signal, timeout: 15000 })).data,
  forecast: async (pred_len, n_samples, signal) =>
    (await client.post('/api/forecast', { pred_len, n_samples }, { signal })).data,
  evaluation: async (signal) => {
    const response = await client.get('/api/evaluation', {
      signal,
      timeout: 15000,
      validateStatus: (status) => status === 200 || status === 404,
    });
    return response.status === 200 ? response.data : null;
  },
  runEvaluation: async (n_samples, signal) =>
    (await client.post('/api/evaluation/run', null, { params: { n_samples }, signal })).data,
};

export function errorMessage(error) {
  const detail = error.response?.data?.detail;
  if (typeof detail === 'string') return detail;
  if (Array.isArray(detail)) return detail.map(({ msg }) => msg).join(' ');
  if (!error.response) return 'Could not reach the KronBit API. Check that the backend is running and try again.';
  return 'The API returned an error (' + error.response.status + '). Please try again.';
}
