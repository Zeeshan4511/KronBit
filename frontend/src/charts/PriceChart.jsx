import React, { useEffect, useRef, useState } from 'react';
import { ColorType, LineStyle, createChart } from 'lightweight-charts';
import { price } from '../services/format';

const mint = '#2ed6a6';
const coral = '#f1747e';
const sky = '#80a7ff';

export default function PriceChart({ history, forecast, comparison, mode = 'candles' }) {
  const container = useRef(null);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    setHover(null);
    const host = container.current;
    const chart = createChart(host, {
      width: host.clientWidth,
      height: host.clientHeight,
      layout: { background: { type: ColorType.Solid, color: '#101923' }, textColor: '#8b9bad', fontFamily: 'system-ui, sans-serif', fontSize: 11 },
      grid: { vertLines: { color: '#1c2a38' }, horzLines: { color: '#1c2a38' } },
      rightPriceScale: { borderColor: '#253343', minimumWidth: 68, scaleMargins: { top: 0.13, bottom: comparison ? 0.12 : 0.21 } },
      timeScale: { borderColor: '#253343', rightOffset: 3 },
      crosshair: { vertLine: { color: '#6a8499', labelBackgroundColor: '#25384b' }, horzLine: { color: '#6a8499', labelBackgroundColor: '#25384b' } },
      localization: { priceFormatter: price },
    });

    const line = (color, data, extra = {}) => {
      const series = chart.addLineSeries({ color, lineWidth: 2, priceLineVisible: false, lastValueVisible: false, ...extra });
      series.setData(data);
      return series;
    };

    let actual;
    let predicted;
    if (comparison) {
      actual = line(mint, comparison.map((point) => ({ time: point.date, value: point.actual })));
      predicted = line(sky, comparison.map((point) => ({ time: point.date, value: point.predicted })), { lineStyle: LineStyle.Dashed });
    } else {
      const candles = history.map((row) => ({ ...row, time: row.timestamp }));
      const volumes = chart.addHistogramSeries({ priceScaleId: '', priceLineVisible: false, lastValueVisible: false, priceFormat: { type: 'volume' } });
      volumes.priceScale().applyOptions({ scaleMargins: { top: 0.82, bottom: 0 } });
      volumes.setData(candles.map((row) => ({
        time: row.time, value: row.volume, color: row.close >= row.open ? '#1a6659' : '#5e3a48',
      })));
      if (mode === 'candles') {
        actual = chart.addCandlestickSeries({
          upColor: mint, downColor: coral, wickUpColor: mint, wickDownColor: coral,
          borderVisible: false, priceLineVisible: false, lastValueVisible: false,
        });
        actual.setData(candles);
      } else {
        actual = line(mint, candles.map((row) => ({ time: row.time, value: row.close })));
      }

      if (forecast?.forecast.length) {
        predicted = line(sky, [
          { time: forecast.last_date, value: forecast.last_close },
          ...forecast.forecast.map((row) => ({ time: row.timestamp, value: row.close })),
        ], { lineStyle: LineStyle.Dashed, lastValueVisible: true });
      }
    }

    chart.subscribeCrosshairMove(({ time, seriesData }) => {
      if (!time) { setHover(null); return; }
      const marketPoint = seriesData.get(actual);
      const modelPoint = predicted ? seriesData.get(predicted) : null;
      setHover({
        time: typeof time === 'string' ? time : [time.year, String(time.month).padStart(2, '0'), String(time.day).padStart(2, '0')].join('-'),
        actual: marketPoint?.close ?? marketPoint?.value,
        predicted: modelPoint?.value,
      });
    });

    chart.timeScale().fitContent();
    const observer = new ResizeObserver(() => chart.resize(host.clientWidth, host.clientHeight));
    observer.observe(host);
    return () => {
      observer.disconnect();
      chart.remove();
    };
  }, [history, forecast, comparison, mode]);

  return <div className="chart-wrap">
    <div className="chart-canvas" ref={container} role="img"
      aria-label={comparison ? 'Actual and predicted closing prices over the holdout period. Exact values are in the comparison table.' : 'BTC/USDT daily price and volume chart. Exact values are in the candle tables.'} />
    {hover && <div className="chart-tooltip" aria-hidden="true">
      <strong>{hover.time}</strong>
      {hover.actual != null && <span>Observed {price(hover.actual)}</span>}
      {hover.predicted != null && <span>Model {price(hover.predicted)}</span>}
    </div>}
  </div>;
}
