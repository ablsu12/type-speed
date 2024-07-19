import { WordBoxProps } from '../type/WordBoxType.ts';

export const TWordBox = ({ value, theme }: WordBoxProps) => {
  return (
    <div
      className={`w-56 h-12 text-black rounded-md m-2.5 flex justify-center items-center p-5 ${theme}`}
    >
      <h1 className={'font-mono font-light'}>{value}</h1>
    </div>
  );
};
