const priceFormatter = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const numberFormatter = new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 });
const dateFormatter = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

export const number = (value) => Number.isFinite(value) ? numberFormatter.format(value) : '—';
export const price = (value) => Number.isFinite(value) ? priceFormatter.format(value) : '—';
export const dateLabel = (value) => value ? dateFormatter.format(new Date(value + 'T00:00:00Z')) : '—';
export const percent = (value) => Number.isFinite(value) ? number(value) + '%' : '—';
export const signedPercent = (value) => Number.isFinite(value) ? (value > 0 ? '+' : '') + percent(value) : '—';
export const changePercent = (close, previous) => previous ? (close / previous - 1) * 100 : null;

export const candleColumns = [
  { key: 'timestamp', label: 'Date (UTC)', format: dateLabel },
  { key: 'open', label: 'Open', format: price },
  { key: 'high', label: 'High', format: price },
  { key: 'low', label: 'Low', format: price },
  { key: 'close', label: 'Close', format: price },
  { key: 'volume', label: 'Volume (BTC)', format: number },
];
