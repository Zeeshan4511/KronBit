import React from 'react';
import { Activity, AlertCircle, ChevronDown, Clock3, Database, Loader2 } from 'lucide-react';

export function Panel({ className = '', children, ...props }) {
  return <section className={'panel ' + className} {...props}>{children}</section>;
}

export function Notice({ error = false, children }) {
  return <div className={'notice' + (error ? ' error' : '')} role={error ? 'alert' : 'status'}>
    {error ? <AlertCircle size={16} /> : <Clock3 size={16} />}
    <span>{children}</span>
  </div>;
}

export function EmptyState({ title, children, pending = false }) {
  const Icon = pending ? Loader2 : Database;
  return <div className="empty-state" role="status">
    <span className="empty-icon"><Icon className={pending ? 'spin' : ''} size={22} /></span>
    <strong>{title}</strong>
    <p>{children}</p>
  </div>;
}

export function Segmented({ label, options, value, onChange }) {
  return <div className="segmented" role="group" aria-label={label}>
    {options.map(({ value: option, label: name }) =>
      <button key={option} type="button" aria-pressed={option === value} onClick={() => onChange(option)}>{name}</button>
    )}
  </div>;
}

export function PageHeading({ eyebrow, title, description, children }) {
  return <div className="page-heading">
    <div>
      <div className="eyebrow"><span className="tiny-line" />{eyebrow}</div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
    {children}
  </div>;
}

export function Stat({ icon: Icon = Activity, label, value, detail, tone = '' }) {
  return <div className="stat panel">
    <div className="stat-top"><span>{label}</span><span className="stat-icon"><Icon size={16} /></span></div>
    <div className={'stat-value ' + tone}>{value}</div>
    <div className={'stat-detail ' + tone}>{detail}</div>
  </div>;
}

export function SampleSelect({ value, onChange, disabled }) {
  return <div className="select-field">
    <select id="samples" value={value} onChange={(event) => onChange(Number(event.target.value))} disabled={disabled}>
      {Array.from({ length: 20 }, (_, i) => i + 1).map((count) =>
        <option value={count} key={count}>{count} {count === 1 ? 'trajectory' : 'trajectories'}</option>
      )}
    </select>
    <ChevronDown size={15} aria-hidden="true" />
  </div>;
}
