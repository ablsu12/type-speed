import { TInput } from './TInput.tsx';
import { TTimer } from './TTimer.tsx';
import { TButton } from './TButton.tsx';
import { useEffect, useState } from 'react';
import { TWordBox } from './TWordBox.tsx';
import { ResultFace } from '../type/WordContainerType.ts';
import { TResultItem } from './TResultItem.tsx';

export const TWordContainer = () => {
  const [seconds, setSeconds] = useState<number>(10);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [target, setTarget] = useState<number>(0);
  const wordsList = [
    'Mehdi',
    'Ali',
    'Javad',
    'Amir',
    'peach',
    'banana',
    'Cherry',
    'BMW',
    'Benz',
    'Micro',
  ];

  const [isResult, setIsResult] = useState(false);

  const [result, setResult] = useState<ResultFace>({
    correctWords: 0,
    inCorrectWords: 0,
    countOfWords: 0,
  });

  const checker = (inputValue: string) => {
    const isCorrect =
      wordsList[target].toLowerCase() === inputValue.trim().toLowerCase();
    if (isCorrect) {
      setResult((prevState) => ({
        ...prevState,
        correctWords: ++prevState.correctWords,
        countOfWords: ++prevState.countOfWords,
      }));
    } else if (!isCorrect) {
      setResult((prevState) => ({
        ...prevState,
        inCorrectWords: ++prevState.inCorrectWords,
      }));
    }
    console.log(result);
  };

  useEffect(() => {
    if (isStarted && seconds > 0) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => --prevSeconds);
      }, 1000);
      return () => clearInterval(interval);
    } else if (seconds === 0) {
      setIsStarted(false);
      setIsResult(true);
      return;
    }
  }, [isStarted, seconds]);

  const reset = (): void => {
    setSeconds(60);
    setIsStarted(false);
    setInputValue('');
  };

  const handleInput = (e): void => {
    setIsStarted(true);
    setInputValue(e.target.value);
    if (e.target.value.endsWith(' ')) {
      checker(e.target.value);
      setTarget((prevTarget) => ++prevTarget);
      setInputValue('');
    }
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <>
      <div
        className={
          'w-3/4 h-72 p-4 bg-blue-300 flex flex-col rounded-md items-center'
        }
      >
        <div
          className={
            'w-full h-3/5 overflow-y-scroll flex justify-center flex-wrap'
          }
        >
          {wordsList.map((x: string, index: number) => {
            return (
              <TWordBox
                value={x}
                theme={index === target ? 'bg-green-400' : 'bg-sky-50'}
                key={x}
              />
            );
          })}
        </div>
        <div className={'w-1/2 h-2/5 px-6 flex justify-center items-center'}>
          <TInput inputHandler={handleInput} value={inputValue} />
          <TTimer value={formatTime(seconds)} />
          <TButton value={'Reset'} clickHandler={reset} />
        </div>
      </div>
      {isResult && (
        <div className={'w-2/4 h-64 bg-sky-50 rounded-md'}>
          <TResultItem
            content={'Correct Words'}
            value={result.correctWords}
            bgColor={'Green'}
          />
          <TResultItem
            content={'Incorrect Words'}
            value={result.inCorrectWords}
            bgColor={'Red'}
          />
          <TResultItem
            content={'Type Speed per minutes'}
            value={result.countOfWords}
            bgColor={'Blue'}
          />
        </div>
      )}
    </>
  );
};
