import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    react(),
  ],
  test: {
    environmentMatchGlobs: [
      ['**/happy-dom.spec.tsx', 'happy-dom'],
      ['**/jsdom.spec.tsx', 'jsdom'],
    ],
    setupFiles: ['./vitest.setup.ts'],
  },
});
