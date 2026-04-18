import { useEffect, useState } from 'react';
import type { QuizBest, Section } from '../types';

type Props = {
  section: Section;
  best: QuizBest | undefined;
  onBest: (best: QuizBest) => void;
};

type Answer = { choice: number; correct: boolean };

export function QuizView({ section, best, onBest }: Props) {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [reported, setReported] = useState(false);

  useEffect(() => {
    setIdx(0);
    setAnswers({});
    setReported(false);
  }, [section.id]);

  const total = section.quiz.length;
  const done = Object.keys(answers).length;
  const finished = done === total && total > 0;
  const score = Object.values(answers).filter((a) => a.correct).length;

  useEffect(() => {
    if (finished && !reported) {
      onBest({ score, total });
      setReported(true);
    }
  }, [finished, reported, score, total, onBest]);

  if (total === 0) {
    return (
      <div className="max-w-2xl">
        <h2 className="text-xl font-bold mb-2">{section.title}</h2>
        <p className="text-slate-500 italic">No quiz for this section.</p>
      </div>
    );
  }

  if (finished) {
    const pct = Math.round((score / total) * 100);
    const color = pct >= 80 ? 'text-emerald-600' : pct >= 60 ? 'text-amber-600' : 'text-rose-600';
    const bestPct = best ? Math.round((best.score / best.total) * 100) : -1;
    const improved = best ? pct > bestPct : true;
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">{section.group}</div>
        <h2 className="text-xl font-bold mb-6">{section.title}</h2>
        <div className="p-8 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <p className="text-sm uppercase tracking-wider text-slate-500 mb-2">Your score</p>
          <p className={'text-5xl font-bold tabular-nums ' + color}>
            {score} / {total}
          </p>
          <p className={'mt-2 font-medium ' + color}>{pct}%</p>
          {best && (
            <p className="mt-4 text-sm text-slate-500">
              Previous best: {best.score}/{best.total} ({bestPct}%)
              {improved && <span className="ml-2 text-emerald-600 font-semibold">new best!</span>}
            </p>
          )}
          <button
            onClick={() => {
              setIdx(0);
              setAnswers({});
              setReported(false);
            }}
            className="mt-6 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-500 text-sm"
          >
            Retry quiz
          </button>
        </div>
      </div>
    );
  }

  const question = section.quiz[idx]!;
  const answered = answers[idx];
  const pct = total ? Math.round((done / total) * 100) : 0;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">{section.group}</div>
      <h2 className="text-xl font-bold mb-6">{section.title}</h2>

      <div className="flex items-center gap-3 mb-6 text-sm text-slate-500">
        <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-500 transition-all duration-300"
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="tabular-nums">
          {idx + 1} / {total}
        </span>
      </div>

      <p className="font-semibold text-lg mb-4">{question.q}</p>

      <div className="space-y-2">
        {question.choices.map((choice, i) => {
          const isCorrect = answered && i === question.correct;
          const isWrong = answered && answered.choice === i && !answered.correct;
          const cls =
            'quiz-choice w-full text-left p-3 border rounded-md border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 ' +
            (answered ? 'disabled ' : '') +
            (isCorrect ? 'correct ' : '') +
            (isWrong ? 'wrong ' : '');
          return (
            <button
              key={i}
              className={cls}
              disabled={!!answered}
              onClick={() => {
                setAnswers((prev) => ({
                  ...prev,
                  [idx]: { choice: i, correct: i === question.correct },
                }));
              }}
            >
              <span className="mr-2 font-mono text-xs text-slate-400">
                {String.fromCharCode(65 + i)}.
              </span>
              {choice}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="mt-4 p-3 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm">
          <p className="font-semibold mb-1">
            {answered.correct ? '✓ Correct' : '✗ Not quite'}
          </p>
          <p className="text-slate-600 dark:text-slate-300">{question.explain}</p>
          <div className="mt-3 flex justify-end">
            <button
              onClick={() => setIdx((i) => Math.min(i + 1, total))}
              className="px-3 py-1.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-500 text-sm"
            >
              {idx === total - 1 ? 'See results' : 'Next question →'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
