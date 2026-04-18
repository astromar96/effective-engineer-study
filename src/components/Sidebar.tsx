import { forwardRef, useMemo } from 'react';
import type { Section } from '../types';

type Props = {
  sections: Section[];
  currentId: string;
  progress: Record<string, boolean>;
  search: string;
  onSearch: (v: string) => void;
  onSelect: (id: string) => void;
  onToggleDone: (id: string) => void;
  open: boolean;
  onClose: () => void;
};

function escapeHtml(s: string) {
  return s.replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]!));
}

export const Sidebar = forwardRef<HTMLInputElement, Props>(function Sidebar(
  { sections, currentId, progress, search, onSearch, onSelect, onToggleDone, open, onClose },
  searchRef
) {
  const visible = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return sections;
    return sections.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.group.toLowerCase().includes(q) ||
        (s.bodyHtml || '').toLowerCase().includes(q)
    );
  }, [sections, search]);

  const grouped: { group: string; items: Section[] }[] = [];
  let lastGroup = '';
  for (const s of visible) {
    if (s.group !== lastGroup) {
      grouped.push({ group: s.group, items: [] });
      lastGroup = s.group;
    }
    grouped[grouped.length - 1]!.items.push(s);
  }

  return (
    <>
      <div
        className={'sidebar-overlay ' + (open ? 'open' : '')}
        onClick={onClose}
      />
      <aside
        className={
          'sidebar ' +
          (open ? 'open ' : '') +
          'md:sticky md:top-[57px] md:self-start md:w-72 lg:w-80 shrink-0 bg-white dark:bg-slate-950 md:bg-transparent md:dark:bg-transparent md:max-h-[calc(100vh-57px)] md:overflow-y-auto sidebar-scroll border-r border-slate-200 dark:border-slate-800 md:border-r-0'
        }
      >
        <div className="p-3 border-b border-slate-200 dark:border-slate-800 md:border-b-0">
          <div className="relative">
            <input
              ref={searchRef}
              type="search"
              placeholder="Search sections… ( / )"
              className="w-full pl-8 pr-3 py-2 text-sm bg-slate-100 dark:bg-slate-800 rounded-md outline-none focus:ring-2 focus:ring-indigo-500"
              autoComplete="off"
              value={search}
              onChange={(e) => onSearch(e.target.value)}
            />
            <svg
              className="absolute left-2.5 top-2.5 text-slate-400"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
        </div>
        <nav className="p-3 pt-0 text-sm">
          {visible.length === 0 && (
            <p
              className="text-xs text-slate-500 px-2 py-3 italic"
              dangerouslySetInnerHTML={{
                __html: `No sections match "${escapeHtml(search)}"`,
              }}
            />
          )}
          {grouped.map(({ group, items }) => (
            <div key={group}>
              <div className="mt-4 first:mt-1 mb-1 px-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                {group}
              </div>
              {items.map((s) => {
                const isActive = s.id === currentId;
                return (
                  <div
                    key={s.id}
                    className={
                      'nav-entry flex items-center gap-2 px-2 py-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer ' +
                      (isActive ? 'active' : '')
                    }
                    onClick={() => {
                      onSelect(s.id);
                      onClose();
                    }}
                  >
                    <input
                      type="checkbox"
                      className="progress-check accent-indigo-600 cursor-pointer"
                      checked={!!progress[s.id]}
                      onChange={() => onToggleDone(s.id)}
                      onClick={(e) => e.stopPropagation()}
                      aria-label="Mark complete"
                    />
                    <span className="truncate flex-1">{s.title}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
});
