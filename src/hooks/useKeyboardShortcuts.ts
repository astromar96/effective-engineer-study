import { useEffect } from 'react';
import type { Mode } from '../types';

type Handlers = {
  mode: Mode;
  onMode: (m: Mode) => void;
  onNextSection: () => void;
  onPrevSection: () => void;
  onFocusSearch: () => void;
  onBlurSearch: () => void;
  onFlipCard: () => void;
  onNextCard: () => void;
  onPrevCard: () => void;
};

function typingTarget(el: EventTarget | null): boolean {
  if (!(el instanceof HTMLElement)) return false;
  const tag = el.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || el.isContentEditable;
}

export function useKeyboardShortcuts(h: Handlers) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const typing = typingTarget(e.target);

      if (e.key === '/' && !typing) {
        e.preventDefault();
        h.onFocusSearch();
        return;
      }
      if (e.key === 'Escape') {
        h.onBlurSearch();
        return;
      }

      if (typing) return;

      switch (e.key) {
        case '1':
          h.onMode('read');
          break;
        case '2':
          h.onMode('flashcard');
          break;
        case '3':
          h.onMode('quiz');
          break;
        case 'j':
          h.onNextSection();
          break;
        case 'k':
          h.onPrevSection();
          break;
        case ' ':
          if (h.mode === 'flashcard') {
            e.preventDefault();
            h.onFlipCard();
          }
          break;
        case 'ArrowLeft':
          if (h.mode === 'flashcard') h.onPrevCard();
          break;
        case 'ArrowRight':
          if (h.mode === 'flashcard') h.onNextCard();
          break;
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [h]);
}
