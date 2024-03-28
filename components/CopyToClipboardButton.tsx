import type { FC } from 'react';

export interface CopyToClipboardButtonProps {
  readonly text: string;
}

export const CopyToClipboardButton: FC<CopyToClipboardButtonProps> = ({ text }) => {
  const handleOnClick = () => {
    window.navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log('copied text', text);
      })
      .catch(() => {
        console.error('could not copy text', text);
      });
  };

  return <button onClick={handleOnClick}>copy</button>;
};
