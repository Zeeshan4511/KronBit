import React from 'react';
import { Activity, Crosshair, Gauge, Layers3, Loader2, Play, RefreshCw, Target } from 'lucide-react';
import PriceChart from '../charts/PriceChart';
import DataTable from '../components/DataTable';
import { EmptyState, Notice, PageHeading, Panel, SampleSelect, Stat } from '../components/ui';
import { api } from '../services/api';
import { dateLabel, percent, price } from '../services/format';

const comparisonColumns = [
  { key: 'date', label: 'Date (UTC)', format: dateLabel },
  { key: 'actual', label: 'Actual close', format: price },
  { key: 'predicted', label: 'Predicted close', format: price, className: () => 'model-value' },
  { key: 'error', label: 'Absolute error', format: price },
];
const byDate = { key: 'date', desc: false };

export default function BacktestPage({ evaluation, busy, market, refresh, samples, setSamples }) {
  const result = evaluation.data;
  const running = evaluation.pending && evaluation.kind === 'run';
  const loading = evaluation.pending && !running;
  const runError = evaluation.kind === 'run' ? evaluation.error : '';
  const metrics = result?.metrics;
  const comparison = result?.comparison;
  const first = comparison?.[0]?.date;
  const last = comparison?.at(-1)?.date;

  return <>
    <PageHeading eyebrow="MODEL EVALUATION" title="Backtest Lab" description="Compare Kronos predictions with observed closes on a 14-day holdout.">
      <button type="button" className="secondary-button reload-button" onClick={refresh} disabled={loading || busy}>
        <RefreshCw size={15} className={loading ? 'spin' : ''} /> Reload saved result
      </button>
    </PageHeading>
    {evaluation.kind === 'load' && evaluation.error && <div className="standalone-notice"><Notice error>{evaluation.error}</Notice></div>}
    <div className="stat-grid">
      <Stat icon={Target} label="Mean absolute error" value={price(metrics?.mae)} detail="MAE · USDT" />
      <Stat icon={Activity} label="Root mean square error" value={price(metrics?.rmse)} detail="RMSE · USDT" />
      <Stat icon={Gauge} label="Mean absolute % error" value={percent(metrics?.mape)} detail="MAPE" />
      <Stat icon={Crosshair} label="Directional accuracy" value={percent(metrics?.directional_accuracy)} detail="Matched close-to-close moves" />
    </div>
    <div className="workspace-grid">
      <Panel className="chart-panel">
        <div className="panel-heading chart-heading">
          <div className="asset-heading">
            <span className="model-icon"><Activity size={20} /></span>
            <div><h2>Predicted vs. actual</h2><p>{first ? dateLabel(first) + ' – ' + dateLabel(last) : 'BTC/USDT daily close'}</p></div>
          </div>
          {result && <span className="tag">{result.test_days} days · {result.n_samples} {result.n_samples === 1 ? 'path' : 'paths'}</span>}
        </div>
        {comparison?.length ? <PriceChart comparison={comparison} /> :
          <EmptyState title={running ? 'Running backtest' : loading ? 'Loading backtest' : 'No backtest results'} pending={evaluation.pending}>
            {running ? 'Kronos is forecasting the holdout window.' : 'Run a backtest to compare the model with observed prices.'}
          </EmptyState>}
        <div className="chart-footer">
          <div className="legend"><span><i className="legend-dot observed" /> Actual close</span><span><i className="legend-dash" /> Predicted close</span></div>
          <span>USDT · UTC</span>
        </div>
      </Panel>
      <Panel className="model-panel">
        <div className="panel-heading model-heading">
          <span className="model-icon"><Layers3 size={20} /></span>
          <div><h2>Backtest controls</h2><p>Evaluate the model on past candles.</p></div>
        </div>
        <form className="model-form" onSubmit={(event) => {
          event.preventDefault();
          if (!busy && !loading && market.data.length) evaluation.run((signal) => api.runEvaluation(samples, signal), 'run');
        }}>
          <div className="field-group">
            <label htmlFor="samples">Sampling paths</label>
            <SampleSelect value={samples} onChange={setSamples} disabled={running} />
            <span className="field-help">Choose how many trajectories to average.</span>
          </div>
          <button type="submit" className="primary-button" disabled={busy || loading || !market.data.length}>
            {running ? <Loader2 size={17} className="spin" /> : <Play size={16} fill="currentColor" />}
            {running ? 'Running backtest…' : runError ? 'Retry backtest' : 'Run backtest'}
          </button>
          {running && <Notice>{result ? "The last saved result remains visible during this run." : "Kronos is generating the holdout predictions."}</Notice>}
          {runError && <Notice error>{runError}</Notice>}
          {market.error && !market.data.length && <Notice error>Market data is unavailable. Reload the snapshot in Market History.</Notice>}
        </form>
        <div className="model-footer"><Target size={15} /><span>Kronos uses candles before the holdout as context. The backend saves the latest result.</span></div>
      </Panel>
      {comparison?.length > 0 && <Panel className="wide-panel">
        <div className="panel-heading table-heading"><div><h2>Daily comparison</h2><p>Actual and predicted closes · Prices in USDT</p></div></div>
        <DataTable rows={comparison.map((point) => ({ ...point, error: Math.abs(point.actual - point.predicted) }))}
          columns={comparisonColumns} initialSort={byDate} label="Backtest comparison" />
      </Panel>}
    </div>
  </>;
}
