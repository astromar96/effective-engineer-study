import { useEffect, useMemo, useState } from 'react';
import type { Section } from '../types';

type Props = {
  section: Section;
  flipSignal: number;
  nextSignal: number;
  prevSignal: number;
};

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

export function FlashcardView({ section, flipSignal, nextSignal, prevSignal }: Props) {
  const initial = useMemo(() => section.flashcards.slice(), [section.id]); // eslint-disable-line react-hooks/exhaustive-deps
  const [deck, setDeck] = useState(initial);
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setDeck(section.flashcards.slice());
    setIdx(0);
    setFlipped(false);
  }, [section.id, section.flashcards]);

  const next = () => {
    setIdx((i) => Math.min(i + 1, deck.length - 1));
    setFlipped(false);
  };
  const prev = () => {
    setIdx((i) => Math.max(i - 1, 0));
    setFlipped(false);
  };

  useEffect(() => {
    if (flipSignal > 0) setFlipped((f) => !f);
  }, [flipSignal]);
  useEffect(() => {
    if (nextSignal > 0) next();
  }, [nextSignal]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (prevSignal > 0) prev();
  }, [prevSignal]); // eslint-disable-line react-hooks/exhaustive-deps

  if (deck.length === 0) {
    return (
      <div className="max-w-2xl">
        <h2 className="text-xl font-bold mb-2">{section.title}</h2>
        <p className="text-slate-500 italic">No flashcards for this section.</p>
      </div>
    );
  }

  const card = deck[idx]!;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">{section.group}</div>
      <h2 className="text-xl font-bold mb-6">{section.title}</h2>

      <div
        className={'card-flip cursor-pointer select-none ' + (flipped ? 'flipped' : '')}
        onClick={() => setFlipped((f) => !f)}
      >
        <div className="card-inner">
          <div className="card-face bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div>
              <div className="text-xs uppercase text-slate-500 tracking-wider mb-3">Question</div>
              {card.q}
            </div>
          </div>
          <div className="card-face back bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900">
            <div>
              <div className="text-xs uppercase text-indigo-700 dark:text-indigo-300 tracking-wider mb-3">
                Answer
              </div>
              {card.a}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between text-sm">
        <button
          onClick={prev}
          disabled={idx === 0}
          className="px-3 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-40"
        >
          ← Prev
        </button>
        <div className="flex items-center gap-3">
          <span className="tabular-nums text-slate-500">
            {idx + 1} / {deck.length}
          </span>
          <button
            onClick={() => {
              setDeck(shuffle(deck));
              setIdx(0);
              setFlipped(false);
            }}
            className="px-3 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            Shuffle
          </button>
          <button
            onClick={() => setFlipped((f) => !f)}
            className="px-3 py-1.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-500"
          >
            Flip (Space)
          </button>
        </div>
        <button
          onClick={next}
          disabled={idx === deck.length - 1}
          className="px-3 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-40"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
