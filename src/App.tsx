import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { SECTIONS } from './data/sections';
import { useAppState } from './hooks/useAppState';
import { useTheme } from './hooks/useTheme';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ReadView } from './components/ReadView';
import { FlashcardView } from './components/FlashcardView';
import { QuizView } from './components/QuizView';
import type { Mode, QuizBest } from './types';

export default function App() {
  const [state, dispatch] = useAppState();
  const [search, setSearch] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Keyboard-driven signals for flashcard interactions (avoids coupling).
  const [flipSignal, setFlipSignal] = useState(0);
  const [nextCardSignal, setNextCardSignal] = useState(0);
  const [prevCardSignal, setPrevCardSignal] = useState(0);

  const searchRef = useRef<HTMLInputElement>(null);
  const mainRef = useRef<HTMLElement>(null);

  useTheme(state.theme);

  const currentIndex = useMemo(
    () => Math.max(0, SECTIONS.findIndex((s) => s.id === state.currentId)),
    [state.currentId]
  );
  const current = SECTIONS[currentIndex]!;

  const setMode = useCallback((mode: Mode) => dispatch({ type: 'SET_MODE', mode }), [dispatch]);
  const setCurrent = useCallback(
    (id: string) => dispatch({ type: 'SET_CURRENT', id }),
    [dispatch]
  );
  const toggleDone = useCallback(
    (id: string) => dispatch({ type: 'TOGGLE_DONE', id }),
    [dispatch]
  );
  const toggleTheme = useCallback(
    () => dispatch({ type: 'SET_THEME', theme: state.theme === 'dark' ? 'light' : 'dark' }),
    [dispatch, state.theme]
  );
  const setNote = useCallback(
    (value: string) => dispatch({ type: 'SET_NOTE', id: current.id, value }),
    [dispatch, current.id]
  );
  const setQuizBest = useCallback(
    (best: QuizBest) => dispatch({ type: 'SET_QUIZ_BEST', id: current.id, best }),
    [dispatch, current.id]
  );

  const nextSection = useCallback(() => {
    const n = SECTIONS[Math.min(currentIndex + 1, SECTIONS.length - 1)];
    if (n) setCurrent(n.id);
  }, [currentIndex, setCurrent]);
  const prevSection = useCallback(() => {
    const p = SECTIONS[Math.max(currentIndex - 1, 0)];
    if (p) setCurrent(p.id);
  }, [currentIndex, setCurrent]);

  useKeyboardShortcuts({
    mode: state.mode,
    onMode: setMode,
    onNextSection: nextSection,
    onPrevSection: prevSection,
    onFocusSearch: () => searchRef.current?.focus(),
    onBlurSearch: () => {
      if (document.activeElement === searchRef.current) {
        searchRef.current?.blur();
        setSearch('');
      }
    },
    onFlipCard: () => setFlipSignal((n) => n + 1),
    onNextCard: () => setNextCardSignal((n) => n + 1),
    onPrevCard: () => setPrevCardSignal((n) => n + 1),
  });

  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0 });
    window.scrollTo({ top: 0 });
  }, [state.currentId, state.mode]);

  const doneCount = useMemo(
    () => SECTIONS.filter((s) => state.progress[s.id]).length,
    [state.progress]
  );

  return (
    <>
      <Header
        mode={state.mode}
        onMode={setMode}
        doneCount={doneCount}
        totalCount={SECTIONS.length}
        theme={state.theme}
        onToggleTheme={toggleTheme}
        onOpenDrawer={() => setDrawerOpen(true)}
      />
      <div className="max-w-screen-2xl mx-auto md:flex">
        <Sidebar
          ref={searchRef}
          sections={SECTIONS}
          currentId={state.currentId}
          progress={state.progress}
          search={search}
          onSearch={setSearch}
          onSelect={setCurrent}
          onToggleDone={toggleDone}
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        />
        <main ref={mainRef} className="flex-1 min-w-0 px-4 md:px-8 lg:px-12 py-6 md:py-8">
          {state.mode === 'read' && (
            <ReadView
              section={current}
              note={state.notes[current.id] ?? ''}
              onNote={setNote}
              onPrev={prevSection}
              onNext={nextSection}
            />
          )}
          {state.mode === 'flashcard' && (
            <FlashcardView
              section={current}
              flipSignal={flipSignal}
              nextSignal={nextCardSignal}
              prevSignal={prevCardSignal}
            />
          )}
          {state.mode === 'quiz' && (
            <QuizView
              section={current}
              best={state.quizBest[current.id]}
              onBest={setQuizBest}
            />
          )}
        </main>
      </div>
    </>
  );
}
