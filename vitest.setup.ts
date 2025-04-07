import { afterEach } from 'vitest';
import failOnConsole from 'vitest-fail-on-console';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

afterEach(() => {
  cleanup();
});

failOnConsole();

