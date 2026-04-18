import { useEffect, useReducer } from 'react';
import type { AppState, Mode, QuizBest } from '../types';
import { SECTIONS } from '../data/sections';

const STORE_KEY = 'ees:v1';

const prefersDark = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;

function defaultState(): AppState {
  return {
    progress: {},
    notes: {},
    quizBest: {},
    theme: prefersDark() ? 'dark' : 'light',
    mode: 'read',
    currentId: SECTIONS[0]?.id ?? '',
    groupCollapse: {},
  };
}

function loadState(): AppState {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return defaultState();
    return { ...defaultState(), ...JSON.parse(raw) };
  } catch {
    return defaultState();
  }
}

export type Action =
  | { type: 'SET_MODE'; mode: Mode }
  | { type: 'SET_CURRENT'; id: string }
  | { type: 'TOGGLE_DONE'; id: string }
  | { type: 'SET_NOTE'; id: string; value: string }
  | { type: 'SET_QUIZ_BEST'; id: string; best: QuizBest }
  | { type: 'SET_THEME'; theme: 'light' | 'dark' }
  | { type: 'TOGGLE_GROUP'; group: string };

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'SET_MODE':
      return { ...state, mode: action.mode };
    case 'SET_CURRENT':
      return { ...state, currentId: action.id };
    case 'TOGGLE_DONE':
      return {
        ...state,
        progress: { ...state.progress, [action.id]: !state.progress[action.id] },
      };
    case 'SET_NOTE':
      return { ...state, notes: { ...state.notes, [action.id]: action.value } };
    case 'SET_QUIZ_BEST': {
      const existing = state.quizBest[action.id];
      const newPct = action.best.score / Math.max(1, action.best.total);
      const oldPct = existing ? existing.score / Math.max(1, existing.total) : -1;
      if (newPct <= oldPct) return state;
      return { ...state, quizBest: { ...state.quizBest, [action.id]: action.best } };
    }
    case 'SET_THEME':
      return { ...state, theme: action.theme };
    case 'TOGGLE_GROUP':
      return {
        ...state,
        groupCollapse: {
          ...state.groupCollapse,
          [action.group]: !state.groupCollapse[action.group],
        },
      };
  }
}

export function useAppState() {
  const [state, dispatch] = useReducer(reducer, undefined, loadState);

  useEffect(() => {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(state));
    } catch {
      /* quota or private mode — non-fatal */
    }
  }, [state]);

  return [state, dispatch] as const;
}
