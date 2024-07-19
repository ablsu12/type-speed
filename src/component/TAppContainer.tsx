import { AppContainerProps } from '../type/AppContainerType.ts';

export const TAppContainer = ({ children }: AppContainerProps) => {
  return (
    <div
      className={'w-full h-3/4 p-2 flex flex-col justify-evenly items-center'}
    >
      {children}
    </div>
  );
};
