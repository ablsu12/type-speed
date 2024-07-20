import { TResultItem } from './TResultItem.tsx';
import { ResultBoxProps } from '../type/ResultBoxType.ts';

export const TResultBox = ({ data, isRender }: ResultBoxProps) => {
  return (
    <div
      className={`w-2/4 h-64 bg-sky-50 rounded-md ${isRender ? 'block' : 'hidden'}`}
    >
      <TResultItem
        content={'Correct Words'}
        value={data.correctWords}
        bgColor={'Green'}
      />
      <TResultItem
        content={'Incorrect Words'}
        value={data.inCorrectWords}
        bgColor={'Red'}
      />
      <TResultItem
        content={'Type Speed per minutes'}
        value={data.countOfWords}
        bgColor={'Blue'}
      />
    </div>
  );
};
