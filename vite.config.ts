import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';

/**
 * "safe" mode (used by `npm run dev`):
 * Runs Tailwind v4 in the browser via the official CDN script instead of the
 * native Rust binaries, so Windows Application Control cannot block it.
 * `npm run build` still uses the normal @tailwindcss/vite plugin.
 */
function tailwindBrowserMode(): Plugin {
  const themeBlock = /@theme\s*\{[\s\S]*?\}\s*/;
  let theme = '';
  return {
    name: 'tailwind-browser-mode',
    enforce: 'pre',
    transform(code, id) {
      if (!id.split('?')[0].endsWith('src/index.css')) return null;
      const match = code.match(themeBlock);
      theme = match ? match[0] : '';
      return {
        code: code.replace(/@import\s+["']tailwindcss["'];?/, '').replace(themeBlock, ''),
        map: null,
      };
    },
    transformIndexHtml() {
      return [
        {
          tag: 'script',
          attrs: {src: 'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4'},
          injectTo: 'head-prepend',
        },
        {
          tag: 'style',
          attrs: {type: 'text/tailwindcss'},
          children: `
@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, -apple-system, sans-serif;
  --font-inter: "Inter", ui-sans-serif, system-ui, -apple-system, sans-serif;
  --font-serif: "Instrument Serif", "Newsreader", "Cormorant Garamond", Georgia, serif;
  --font-signature: "Caveat", cursive;
}`,
          injectTo: 'head',
        },
      ];
    },
  };
}

export default defineConfig(async ({mode}) => {
  const safe = mode === 'safe';
  const tailwind = safe
    ? tailwindBrowserMode()
    : (await import('@tailwindcss/vite')).default();

  return {
    plugins: [react(), tailwind],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
