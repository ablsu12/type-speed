import { TimerProps } from '../type/TimerType.ts';

export const TTimer = ({ value }: TimerProps) => {
  return (
    <div
      className={
        'w-20 h-12 mx-2 flex justify-center items-center rounded-md bg-sky-50'
      }
    >
      <h1>{value}</h1>
    </div>
  );
};
