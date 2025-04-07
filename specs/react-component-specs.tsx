import { test, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Input } from '../components/Input';
import { CopyToClipboardButton } from '../components/CopyToClipboardButton';
import { Collapsible } from '../components/Collapsible';
import { Switch } from '../components/Switch';

export const run = () => {
  test('should not throw error when rendering <iframe />', () => {
    expect(() => {
      render(<iframe src="http://localhost:3000" />);
    }).not.toThrow();
  });

  test('should not throw error when rendering <script />', () => {
    expect(() => {
      render(<script src="http://localhost:3000"></script>);
    }).not.toThrow();
  });

  test(`should not trigger the <button type="reset" /> when press enter on the <input /> field.
    This is the Firefox & Chrome default behavior.
    If we put a [id] and [htmlFor] attribute on <input /> and <label /> element, it works.`, async () => {
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

  test('should switch the [open] property on the <details /> element when clicking on the <summary />', async () => {
    const user = userEvent.setup();
    render(<Collapsible />);

    const collapsible = screen.getByRole('dialog');
    expect(collapsible).toHaveProperty('open', false);

    await user.click(screen.getByText('Click me'));
    expect(collapsible).toHaveProperty('open', true);
  });

  test('should call the [onChange] handler on <input /> element only once when clicking on the surrounding <label />', async () => {
    const user = userEvent.setup();
    const onChangeSpy = vi.fn();
    render(<Switch onChange={onChangeSpy} />);

    const switchElement = screen.getByRole('switch');
    await user.click(switchElement);

    expect(onChangeSpy).toHaveBeenCalledTimes(1);
  });
};
