import React, { useEffect, useState } from 'react';
import { Activity, ArrowUpRight, CandlestickChart, ChevronRight, Database, FlaskConical, Gauge, Menu, X } from 'lucide-react';
import BacktestPage from './pages/BacktestPage';
import { ForecastPage, MarketPage } from './pages/MarketPages';
import { api, apiDocs, isStreamlit } from './services/api';
import { useRequest } from './services/useRequest';

const pages = {
  forecast: { label: 'Forecast', icon: Gauge },
  market: { label: 'Market History', icon: CandlestickChart },
  backtest: { label: 'Backtest Lab', icon: FlaskConical },
};

function getRoute() {
  const hash = window.location.hash.slice(1);
  return Object.hasOwn(pages, hash) ? hash : 'forecast';
}

function Sidebar({ route, open, close }) {
  return <>
    {open && <button className="sidebar-backdrop" type="button" aria-label="Close navigation" onClick={close} />}
    <aside id="sidebar" className={'sidebar' + (open ? ' open' : '')} aria-label="Workspace sidebar" onKeyDown={(event) => {
      if (event.key === 'Escape') close();
    }}>
      <div className="brand-row">
        <a className="brand" href="#forecast" onClick={close} aria-label="KronBit forecast home">
          <span className="brand-icon"><Activity size={23} strokeWidth={2.6} /></span>
          <span><strong>Kron<span>Bit</span></strong><small>RESEARCH TERMINAL</small></span>
        </a>
        <button type="button" className="icon-button sidebar-close" aria-label="Close navigation" onClick={close}><X size={19} /></button>
      </div>
      <div className="nav-section">
        <div className="nav-label">WORKSPACE</div>
        <nav aria-label="Workspace">
          {Object.entries(pages).map(([key, { label, icon: Icon }]) =>
            <a key={key} href={'#' + key} onClick={close} aria-current={route === key ? 'page' : undefined}>
              <Icon size={17} /><span>{label}</span>{route === key && <ChevronRight size={14} className="nav-arrow" />}
            </a>
          )}
        </nav>
      </div>
      <div className="sidebar-bottom">
        <div className="terminal-meta">
          <Database size={16} />
          <div><strong>BTC/USDT</strong><span>Daily market snapshot</span></div>
        </div>
        <a className="docs-link" href={apiDocs} target="_blank" rel="noreferrer">
          {isStreamlit ? 'Project documentation' : 'API documentation'} <ArrowUpRight size={14} />
        </a>
      </div>
    </aside>
  </>;
}

export default function App() {
  const [route, setRoute] = useState(getRoute);
  const [menuOpen, setMenuOpen] = useState(false);
  const [forecastInputs, setForecastInputs] = useState({ horizon: 14, samples: 1 });
  const [backtestSamples, setBacktestSamples] = useState(5);
  const market = useRequest([]);
  const forecast = useRequest();
  const evaluation = useRequest();
  const { run: loadMarket } = market;
  const { run: loadEvaluation } = evaluation;
  const busy = forecast.pending || (evaluation.pending && evaluation.kind === 'run');

  useEffect(() => {
    const navigate = () => {
      setRoute(getRoute());
      setMenuOpen(false);
      const scrollHost = isStreamlit ? document.querySelector('[data-testid="stMain"]') ?? window : window;
      scrollHost.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', navigate);
    return () => window.removeEventListener('hashchange', navigate);
  }, []);

  useEffect(() => { loadMarket(api.history); }, [loadMarket]);
  useEffect(() => { if (route === 'backtest') loadEvaluation(api.evaluation); }, [loadEvaluation, route]);
  useEffect(() => {
    document.title = pages[route].label + ' — KronBit';
  }, [route]);

  const status = market.pending ? 'Connecting' : market.error ? 'API unavailable' : market.data.length ? 'API connected' : 'Awaiting data';
  const statusTone = market.pending ? 'waiting' : market.error ? 'offline' : market.data.length ? 'online' : 'waiting';

  return <div className="app-shell">
    <Sidebar route={route} open={menuOpen} close={() => setMenuOpen(false)} />
    <div className="main-shell">
      <header className="topbar">
        <div className="breadcrumb">
          <button type="button" className="icon-button menu-toggle" aria-label="Open navigation" aria-controls="sidebar"
            aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}><Menu size={21} /></button>
          <span className="breadcrumb-root">Workspace</span><ChevronRight size={13} className="breadcrumb-separator" />
          <strong>{pages[route].label}</strong>
        </div>
        <div className="topbar-meta">
          {busy && <span className="busy-label" role="status">Kronos running</span>}
          <span className={'api-badge ' + statusTone} role="status"><i />{status}</span>
        </div>
      </header>
      <main className="content" id="main-content">
        {route === 'forecast' && <ForecastPage market={market} forecast={forecast} busy={busy}
          inputs={forecastInputs} updateInputs={setForecastInputs} />}
        {route === 'market' && <MarketPage market={market} />}
        {route === 'backtest' && <BacktestPage market={market} evaluation={evaluation} busy={busy}
          samples={backtestSamples} setSamples={setBacktestSamples} refresh={() => loadEvaluation(api.evaluation)} />}
        <footer className="workspace-footer"><span>KronBit <b>·</b> Bitcoin research workspace</span><span>All candle times in UTC</span></footer>
      </main>
    </div>
  </div>;
}
