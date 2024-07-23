import { BgColor, ResultProps } from '../type/type.ts';

export const TResultItem = ({ content, value, bgColor }: ResultProps) => {
  const computedBgColor = (color: BgColor) => {
    if (color === 'Green') return 'bg-green-500';
    if (color === 'Red') return 'bg-red-400';
    if (color === 'Blue') return 'bg-blue-300';
  };
  return (
    <div
      className={`w-full h-1/3 flex justify-center items-center ${computedBgColor(bgColor)}`}
    >
      <h1 className={'font-bold font-mono text-3xl'}>
        {content}: {value}
      </h1>
    </div>
  );
};
