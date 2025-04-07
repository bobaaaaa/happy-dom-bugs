import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    workspace: [
      {
        extends: true,
        test: {
          name: 'happy-dom',
          include: ['**/happy-dom.spec.tsx'],
          environment: 'happy-dom',
          environmentOptions: {
            happyDOM: {
              settings: {
                disableJavaScriptFileLoading: true,
                disableCSSFileLoading: true,
                // @ts-expect-error
                handleDisabledFileLoadingAsSuccess: true,
                navigation: {
                  disableMainFrameNavigation: true,
                  disableChildFrameNavigation: true,
                  disableChildPageNavigation: true,
                }
              },
            },
          }
        },
      },
      {
        extends: true,
        test: {
          name: 'jsdom',
          include: ['**/jsdom.spec.tsx'],
          environment: 'jsdom',
        },
      },
    ],
    setupFiles: ['./vitest.setup.ts'],
  },
});
