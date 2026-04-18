import { useEffect } from 'react';
import hljsLightUrl from 'highlight.js/styles/github.css?url';
import hljsDarkUrl from 'highlight.js/styles/github-dark.css?url';

function ensureHljsLinks() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById('hljs-light')) {
    const l = document.createElement('link');
    l.id = 'hljs-light';
    l.rel = 'stylesheet';
    l.href = hljsLightUrl;
    document.head.appendChild(l);
  }
  if (!document.getElementById('hljs-dark')) {
    const l = document.createElement('link');
    l.id = 'hljs-dark';
    l.rel = 'stylesheet';
    l.href = hljsDarkUrl;
    (l as HTMLLinkElement).disabled = true;
    document.head.appendChild(l);
  }
}

export function useTheme(theme: 'light' | 'dark') {
  useEffect(() => {
    ensureHljsLinks();
    const dark = theme === 'dark';
    document.documentElement.classList.toggle('dark', dark);
    const light = document.getElementById('hljs-light') as HTMLLinkElement | null;
    const darkEl = document.getElementById('hljs-dark') as HTMLLinkElement | null;
    if (light) light.disabled = dark;
    if (darkEl) darkEl.disabled = !dark;
  }, [theme]);
}
