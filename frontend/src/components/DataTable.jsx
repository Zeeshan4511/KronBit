import React, { useMemo, useState } from 'react';
import { ArrowDown, ArrowUp, ChevronsUpDown, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { EmptyState } from './ui';

export default function DataTable({ rows, columns, initialSort, pageSize = 10, search = false, label }) {
  const [sort, setSort] = useState(initialSort);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    const result = term ? rows.filter((row) => columns.some(({ key, format }) =>
      String(row[key]).toLowerCase().includes(term) || format(row[key]).toLowerCase().includes(term)
    )) : [...rows];
    return result.sort((a, b) => {
      const first = a[sort.key];
      const second = b[sort.key];
      const order = typeof first === 'number' ? first - second : first.localeCompare(second);
      return sort.desc ? -order : order;
    });
  }, [rows, columns, query, sort]);
  const lastPage = Math.max(0, Math.ceil(filtered.length / pageSize) - 1);
  const activePage = Math.min(page, lastPage);
  const firstRow = activePage * pageSize;
  const visible = filtered.slice(firstRow, firstRow + pageSize);

  return <>
    {search && <label className="table-search">
      <Search size={15} aria-hidden="true" />
      <input type="search" aria-label="Search table" placeholder="Search by date or value" value={query}
        onChange={(event) => { setQuery(event.target.value); setPage(0); }} />
    </label>}
    {visible.length ? <>
      <div className="table-scroll" tabIndex={0} role="region" aria-label={label}>
        <table aria-label={label}>
          <thead><tr>{columns.map(({ key, label: name }) => {
            const active = sort.key === key;
            const Icon = active ? sort.desc ? ArrowDown : ArrowUp : ChevronsUpDown;
            return <th key={key} scope="col" aria-sort={active ? sort.desc ? 'descending' : 'ascending' : undefined}>
              <button type="button" onClick={() => {
                setSort({ key, desc: active ? !sort.desc : false });
                setPage(0);
              }}>{name}<Icon size={12} aria-hidden="true" /></button>
            </th>;
          })}</tr></thead>
          <tbody>{visible.map((row) => <tr key={row.timestamp ?? row.date}>
            {columns.map(({ key, format, className }) => <td key={key} className={className?.(row)}>{format(row[key])}</td>)}
          </tr>)}</tbody>
        </table>
      </div>
      <div className="table-footer">
        <span>{firstRow + 1}–{firstRow + visible.length} of {filtered.length} rows</span>
        {lastPage > 0 && <div className="pagination">
          <button type="button" className="icon-button" aria-label="Previous page" disabled={activePage === 0}
            onClick={() => setPage(activePage - 1)}><ChevronLeft size={16} /></button>
          <span>{activePage + 1} / {lastPage + 1}</span>
          <button type="button" className="icon-button" aria-label="Next page" disabled={activePage === lastPage}
            onClick={() => setPage(activePage + 1)}><ChevronRight size={16} /></button>
        </div>}
      </div>
    </> : <EmptyState title="No matching rows">Try a different search.</EmptyState>}
  </>;
}
