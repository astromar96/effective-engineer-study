import type { Mode } from '../types';

type Props = {
  mode: Mode;
  onMode: (m: Mode) => void;
  doneCount: number;
  totalCount: number;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onOpenDrawer: () => void;
};

const modeTabs: { key: Mode; label: string; hint: string }[] = [
  { key: 'read', label: 'Read', hint: 'Read (1)' },
  { key: 'flashcard', label: 'Cards', hint: 'Flashcards (2)' },
  { key: 'quiz', label: 'Quiz', hint: 'Quiz (3)' },
];

export function Header({
  mode,
  onMode,
  doneCount,
  totalCount,
  theme,
  onToggleTheme,
  onOpenDrawer,
}: Props) {
  const pct = totalCount ? Math.round((doneCount / totalCount) * 100) : 0;
  const dark = theme === 'dark';
  return (
    <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-950/95 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-screen-2xl mx-auto px-4 py-3 flex items-center gap-3">
        <button
          className="md:hidden p-2 -ml-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
          aria-label="Open menu"
          onClick={onOpenDrawer}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
        <div className="flex-1 min-w-0">
          <h1 className="text-base md:text-lg font-semibold truncate">
            The Effective Engineer — Study Guide
          </h1>
          <p className="text-xs text-slate-500 hidden md:block">
            Distilled from r/ExperiencedDevs · interactive study app
          </p>
        </div>

        <div
          className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-0.5 text-sm"
          role="tablist"
          aria-label="Study mode"
        >
          {modeTabs.map((t) => {
            const active = t.key === mode;
            return (
              <button
                key={t.key}
                onClick={() => onMode(t.key)}
                title={t.hint}
                className={
                  'mode-tab px-3 py-1 rounded-md font-medium ' +
                  (active
                    ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-300 shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100')
                }
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <div className="hidden sm:flex items-center gap-2 min-w-[140px]">
          <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-500 transition-all duration-300"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-xs tabular-nums text-slate-500">
            {doneCount}/{totalCount}
          </span>
        </div>

        <button
          className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
          aria-label="Toggle theme"
          onClick={onToggleTheme}
        >
          {dark ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
