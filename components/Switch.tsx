import type { FC } from 'react';

export interface SwitchProps {
  readonly onChange: () => void;
}

export const Switch: FC<SwitchProps> = ({ onChange }) => {
  return (
    <label role="switch">
      <input type="checkbox" onChange={onChange} />
      <span>Toggle</span>
    </label>
  );
};
