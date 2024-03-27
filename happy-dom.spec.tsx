import { test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Input } from './Input';

test('should asd', async () => {
  const user = userEvent.setup();
  const resetSpy = vi.fn();

  render(<Input onReset={resetSpy} />);
  const input = screen.getByRole('textbox');
  await user.type(input, 'abc');
  await user.type(input, '{enter}');
  expect(resetSpy).not.toHaveBeenCalled();
});
