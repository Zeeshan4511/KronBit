import React, { useMemo, useState } from 'react';
import { Activity, ArrowDownUp, ArrowRight, Bitcoin, CalendarDays, CandlestickChart, LineChart, Cpu, Info, Layers3, Loader2, Play, RefreshCw, TrendingUp } from 'lucide-react';
import PriceChart from '../charts/PriceChart';
import DataTable from '../components/DataTable';
import { EmptyState, Notice, PageHeading, Panel, SampleSelect, Segmented, Stat } from '../components/ui';
import { api } from '../services/api';
import { candleColumns, changePercent, dateLabel, number, price, signedPercent } from '../services/format';

const ranges = [
  { value: 30, label: '1M' }, { value: 90, label: '3M' },
  { value: 180, label: '6M' }, { value: 600, label: 'All' },
];
const horizons = [7, 14, 30].map((value) => ({ value, label: value + 'D' }));
const byNewest = { key: 'timestamp', desc: true };
const byOldest = { key: 'timestamp', desc: false };

function Snapshot({ market }) {
  const last = market.at(-1);
  const previous = market.at(-2);
  const daily = changePercent(last?.close, previous?.close);
  return <div className="stat-grid">
    <Stat icon={Bitcoin} label="Last daily close" value={price(last?.close)}
      detail={last ? 'USDT · ' + dateLabel(last.timestamp) : 'USDT per BTC'} />
    <Stat icon={TrendingUp} label="Daily change" value={signedPercent(daily)}
      detail="Versus prior close" tone={daily == null ? '' : daily >= 0 ? 'positive' : 'negative'} />
    <Stat icon={ArrowDownUp} label="Daily range" value={last ? price(last.high - last.low) : '—'}
      detail={last ? price(last.low) + ' – ' + price(last.high) + ' USDT' : 'High minus low · USDT'} />
    <Stat icon={Layers3} label="Daily volume" value={number(last?.volume)} detail="BTC traded in the last candle" />
  </div>;
}

function MarketChart({ market, forecast, compact = false }) {
  const [range, setRange] = useState(90);
  const [mode, setMode] = useState('candles');
  const history = useMemo(() => market.data.slice(-range), [market.data, range]);
  const latest = history.at(-1);
  const currentForecast = forecast && forecast.last_date === latest?.timestamp && forecast.last_close === latest?.close
    ? forecast : null;
  return <Panel className="chart-panel">
    <div className="panel-heading chart-heading">
      <div className="asset-heading">
        <span className="asset-icon"><Bitcoin size={22} /></span>
        <div><h2>BTC / USDT</h2><p>Bitcoin <span className="separator">·</span> Daily candles</p></div>
      </div>
      <div className="chart-tools">
        <div className="segmented mode-switch" role="group" aria-label="Chart type">
          <button type="button" aria-label="Candlesticks" title="Candlesticks" aria-pressed={mode === 'candles'} onClick={() => setMode('candles')}><CandlestickChart size={16} /></button>
          <button type="button" aria-label="Closing price line" title="Closing price line" aria-pressed={mode === 'line'} onClick={() => setMode('line')}><LineChart size={16} /></button>
        </div>
        <Segmented label="History range" options={ranges} value={range} onChange={setRange} />
      </div>
    </div>
    {market.error && <div className="panel-inset"><Notice error>{market.error}</Notice></div>}
    {history.length ? <PriceChart history={history} forecast={currentForecast} mode={mode} /> :
      <EmptyState title={market.pending ? 'Loading daily candles' : 'Market history unavailable'} pending={market.pending}>
        {market.pending ? 'Reading the latest cached BTC/USDT snapshot.' : 'Use Reload snapshot to request market history again.'}
      </EmptyState>}
    <div className="chart-footer">
      <div className="legend">
        <span><i className="legend-dot observed" /> Observed price</span>
        <span><i className="legend-dot volume" /> Volume</span>
        {currentForecast && <span><i className="legend-dash" /> Kronos forecast</span>}
      </div>
      {!compact && <span>{history.length ? history.length + ' observed candles' : 'UTC daily intervals'}</span>}
      {compact && <span>USDT · UTC</span>}
    </div>
    {forecast && history.length > 0 && !currentForecast && <div className="panel-inset">
      <Notice>This forecast starts from {dateLabel(forecast.last_date)}. Run a new forecast to overlay it on the current snapshot.</Notice>
    </div>}
  </Panel>;
}

function ForecastControls({ forecast, busy, ready, lastDate, inputs, updateInputs }) {
  const { horizon, samples } = inputs;
  const setHorizon = (value) => updateInputs((previous) => ({ ...previous, horizon: value }));
  const setSamples = (value) => updateInputs((previous) => ({ ...previous, samples: value }));
  const valid = Number.isInteger(Number(horizon)) && Number(horizon) >= 1 && Number(horizon) <= 168;
  const submit = (event) => {
    event.preventDefault();
    if (valid && ready && !busy) forecast.run((signal) => api.forecast(Number(horizon), samples, signal));
  };

  return <Panel className="model-panel">
    <div className="panel-heading model-heading">
      <span className="model-icon"><Cpu size={20} /></span>
      <div><h2>Forecast controls</h2><p>Configure a Kronos inference run.</p></div>
    </div>
    <form className="model-form" onSubmit={submit}>
      <div className="field-group">
        <label htmlFor="horizon">Forecast horizon <span className="field-meta">DAYS</span></label>
        <Segmented label="Horizon presets" options={horizons} value={Number(horizon)} onChange={setHorizon} />
        <input id="horizon" type="number" min="1" max="168" step="1" required value={horizon}
          aria-describedby="horizon-help" onChange={(event) => setHorizon(event.target.value)} />
        <span id="horizon-help" className="field-help">1–168 daily candles</span>
      </div>
      <div className="field-group">
        <label htmlFor="samples">Sampling paths</label>
        <SampleSelect value={samples} onChange={setSamples} />
        <span className="field-help">More paths take longer to average.</span>
      </div>
      <button type="submit" className="primary-button" disabled={!valid || !ready || busy}>
        {forecast.pending ? <Loader2 size={17} className="spin" /> : <Play size={16} fill="currentColor" />}
        {forecast.pending ? 'Generating forecast…' : forecast.error ? 'Retry forecast' : 'Run forecast'}
      </button>
      {forecast.pending && <Notice>Kronos is sampling future candles. Longer horizons may take a while.</Notice>}
      {forecast.error && <Notice error>{forecast.error}</Notice>}
    </form>
    <div className="model-footer"><Info size={15} /><span>{lastDate ? 'Forecasts start after ' + dateLabel(lastDate) + ', the last available candle.' : 'Load the market snapshot to start a forecast.'}</span></div>
  </Panel>;
}

function ForecastResults({ result }) {
  const last = result.forecast.at(-1);
  const move = changePercent(last?.close, result.last_close);
  return <Panel className="wide-panel">
    <div className="panel-heading results-heading">
      <div><div className="eyebrow">MODEL OUTPUT</div><h2>Forecast results</h2>
        <p>{result.forecast.length} daily predictions from the {dateLabel(result.last_date)} close.</p></div>
      <span className="tag forecast-tag">{signedPercent(move)} at final close</span>
    </div>
    <DataTable rows={result.forecast} columns={candleColumns} initialSort={byOldest} label="Forecast candles" />
  </Panel>;
}

function MarketTable({ market, preview = false }) {
  const rows = preview ? market.data.slice(-5) : market.data;
  return <Panel>
    <div className="panel-heading table-heading">
      <div><h2>{preview ? 'Recent candles' : 'Historical candles'}</h2>
        <p>Observed daily OHLCV <span className="separator">·</span> Prices in USDT</p></div>
      {preview && <a className="text-link" href="#market">View history <ArrowRight size={15} /></a>}
    </div>
    {rows.length ? <DataTable rows={rows} columns={candleColumns} initialSort={byNewest} search={!preview} label="Historical candles" /> :
      <EmptyState title={market.pending ? 'Loading candles' : 'No candles to display'} pending={market.pending}>Data comes from the backend market snapshot.</EmptyState>}
  </Panel>;
}

function DatasetPanel({ market }) {
  const latest = market.at(-1);
  return <Panel className="dataset-panel">
    <div className="panel-heading model-heading"><span className="model-icon neutral"><Activity size={19} /></span>
      <div><h2>Data &amp; model</h2><p>Inputs behind this workspace.</p></div>
    </div>
    <dl>
      <div><dt>Data source</dt><dd>Binance snapshot</dd></div>
      <div><dt>Interval</dt><dd>1 day · UTC</dd></div>
      <div><dt>Model</dt><dd>Kronos-small</dd></div>
      <div><dt>Context</dt><dd>Up to 512 candles</dd></div>
    </dl>
    <div className="model-footer"><CalendarDays size={15} /><span>Snapshot as of {dateLabel(latest?.timestamp)}</span></div>
  </Panel>;
}

function Reload({ market }) {
  return <button className="secondary-button reload-button" type="button" disabled={market.pending}
    onClick={() => market.run(api.history)}>
    <RefreshCw size={15} className={market.pending ? 'spin' : ''} /> {market.pending ? 'Loading snapshot' : 'Reload snapshot'}
  </button>;
}

export function ForecastPage({ market, forecast, busy, inputs, updateInputs }) {
  const latest = market.data.at(-1);
  return <>
    <PageHeading eyebrow="RESEARCH WORKSPACE" title="Bitcoin Forecast" description="Explore daily BTC/USDT price action and project future candles with Kronos."><Reload market={market} /></PageHeading>
    <Snapshot market={market.data} />
    <div className="workspace-grid">
      <MarketChart market={market} forecast={forecast.data} compact />
      <ForecastControls forecast={forecast} busy={busy} ready={!!latest} lastDate={latest?.timestamp}
        inputs={inputs} updateInputs={updateInputs} />
      {forecast.data && <ForecastResults result={forecast.data} />}
      <MarketTable market={market} preview />
      <DatasetPanel market={market.data} />
    </div>
  </>;
}

export function MarketPage({ market }) {
  const first = market.data[0]?.timestamp;
  const last = market.data.at(-1)?.timestamp;
  return <>
    <PageHeading eyebrow="MARKET DATA" title="Market History" description="Inspect the daily BTC/USDT candles used by Kronos."><Reload market={market} /></PageHeading>
    <Snapshot market={market.data} />
    <div className="page-stack">
      <MarketChart market={market} />
      {first && <div className="dataset-range"><CalendarDays size={16} /> Snapshot coverage · {dateLabel(first)} through {dateLabel(last)} · {market.data.length} candles</div>}
      <MarketTable market={market} />
    </div>
  </>;
}
