export const Q = (text: string, source: string, url: string): string =>
  `<div class="copy-wrap"><blockquote class="quote"><p>${text}</p><footer class="source">— <a href="${url}" target="_blank" rel="noopener">${source}</a></footer></blockquote><button class="copy-btn" data-copy-quote>Copy</button></div>`;

export const QN = (text: string): string =>
  `<div class="copy-wrap"><blockquote class="quote"><p>${text}</p><footer class="source">— same thread</footer></blockquote><button class="copy-btn" data-copy-quote>Copy</button></div>`;

export const QP = (text: string): string =>
  `<div class="copy-wrap"><blockquote class="quote"><p>${text}</p></blockquote><button class="copy-btn" data-copy-quote>Copy</button></div>`;

export const CODE = (lang: string, code: string): string =>
  `<div class="copy-wrap"><pre><code class="language-${lang}">${code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')}</code></pre><button class="copy-btn" data-copy-code>Copy</button></div>`;

export const DETAILS = (summary: string, html: string): string =>
  `<details><summary>${summary}</summary>${html}</details>`;
