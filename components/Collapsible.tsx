import type { FC } from 'react';

export const Collapsible: FC = () => {
  return (
    <details role="dialog">
      <summary>Click me</summary>
      <p>Content</p>
    </details>
  );
};
