import type { FC } from 'react';

export interface InputProps {
  readonly onReset: () => void;
}

export const Input: FC<InputProps> = ({ onReset }) => {
  return (
    <label>
      <input placeholder="placeholder-text" />
      <button type="reset" aria-label="clear" onClick={onReset} />
    </label>
  );
};
