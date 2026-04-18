import { useEffect, useRef, useState } from 'react';
import hljs from 'highlight.js/lib/common';
import type { Section } from '../types';

type Props = {
  section: Section;
  note: string;
  onNote: (value: string) => void;
  onPrev: () => void;
  onNext: () => void;
};

export function ReadView({ section, note, onNote, onPrev, onNext }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [localNote, setLocalNote] = useState(note);

  useEffect(() => {
    setLocalNote(note);
  }, [note, section.id]);

  useEffect(() => {
    const t = setTimeout(() => {
      if (localNote !== note) onNote(localNote);
    }, 200);
    return () => clearTimeout(t);
  }, [localNote, note, onNote]);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    root.querySelectorAll('pre code').forEach((el) => {
      if (!el.classList.contains('hljs')) hljs.highlightElement(el as HTMLElement);
    });
  }, [section.id]);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const handler = (e: Event) => {
      const target = (e.target as HTMLElement).closest<HTMLButtonElement>(
        '[data-copy-quote],[data-copy-code]'
      );
      if (!target) return;
      const wrap = target.closest('.copy-wrap');
      if (!wrap) return;
      const isCode = target.hasAttribute('data-copy-code');
      const sourceEl = isCode
        ? wrap.querySelector('pre code')
        : wrap.querySelector('blockquote');
      const text = (sourceEl?.textContent ?? '').trim();
      navigator.clipboard
        .writeText(text)
        .then(() => {
          target.classList.add('copied');
          const prev = target.textContent;
          target.textContent = 'Copied!';
          setTimeout(() => {
            target.classList.remove('copied');
            if (prev) target.textContent = prev;
          }, 1200);
        })
        .catch(() => {
          /* clipboard blocked — ignore */
        });
    };
    root.addEventListener('click', handler);
    return () => root.removeEventListener('click', handler);
  }, [section.id]);

  return (
    <article className="max-w-3xl">
      <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">{section.group}</div>
      <h2 className="text-2xl md:text-3xl font-bold mb-6">{section.title}</h2>

      <div
        ref={containerRef}
        className="prose prose-slate dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: section.bodyHtml }}
      />

      <div className="mt-8">
        <label className="block text-sm font-semibold mb-2">Your notes</label>
        <textarea
          className="w-full min-h-[120px] p-3 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Jot takeaways, questions, action items…"
          value={localNote}
          onChange={(e) => setLocalNote(e.target.value)}
        />
      </div>

      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={onPrev}
          className="px-4 py-2 text-sm rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
        >
          ← Previous
        </button>
        <button
          onClick={onNext}
          className="px-4 py-2 text-sm rounded-md bg-indigo-600 text-white hover:bg-indigo-500"
        >
          Next →
        </button>
      </div>
    </article>
  );
}
