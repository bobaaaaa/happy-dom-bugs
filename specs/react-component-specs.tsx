import { test, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Input } from '../components/Input';
import { CopyToClipboardButton } from '../components/CopyToClipboardButton';

export const run = () => {
  test(`should not trigger the <button type="reset" /> when press enter on the <input /> field.
    This is the Firefox & Chrome default behavior.
    If we put a [id] and [htmlFor] attribute on the <input /> and <label /> element, it works.`, async () => {
    const user = userEvent.setup();
    const resetSpy = vi.fn();

    render(<Input onReset={resetSpy} />);
    const input = screen.getByRole('textbox');
    await user.type(input, 'abc');
    await user.type(input, '{enter}');
    expect(resetSpy).not.toHaveBeenCalled();
  });

  test(`should successfully wait for the copied clipboard text because it is an async task.`, async () => {
    const user = userEvent.setup();

    render(<CopyToClipboardButton text="foo bar" />);
    const button = screen.getByRole('button');
    await user.click(button);

    await waitFor(async () => {
      const copiedText = await navigator.clipboard.readText();
      return expect(copiedText).toBe('foo bar');
    });
  });
};
