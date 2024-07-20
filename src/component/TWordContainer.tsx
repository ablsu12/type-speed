import { TInput } from './TInput.tsx';
import { TTimer } from './TTimer.tsx';
import { TButton } from './TButton.tsx';
import { ChangeEvent, useEffect, useState } from 'react';
import { TWordBox } from './TWordBox.tsx';
import { ResultFace } from '../type/WordContainerType.ts';
import { TResultBox } from './TResultBox.tsx';

export const TWordContainer = () => {
  const [seconds, setSeconds] = useState(60);
  const [isStarted, setIsStarted] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [target, setTarget] = useState(0);
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
    'Nano',
    'Git',
    'Git',
    'Git',
    'Git',
    'Git',
    'Git',
    'Git',
    'Git',
    'Git',
    'Git',
    'Git',
    'Git',
  ];

  const [isResultRender, setIsResultRender] = useState(false);

  const [result, setResult] = useState<ResultFace>({
    correctWords: 0,
    inCorrectWords: 0,
    countOfWords: 0,
  });

  useEffect(() => {
    if (isStarted && seconds > 0) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => --prevSeconds);
      }, 1000);
      return () => clearInterval(interval);
    } else if (seconds === 0) {
      setIsStarted(false);
      setIsResultRender(true);
      return;
    }
  }, [isStarted, seconds]);

  function formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }

  function checker(inputValue: string): void {
    if (wordsList[target].toLowerCase() === inputValue.trim().toLowerCase()) {
      setResult((prevState) => ({
        ...prevState,
        correctWords: ++prevState.correctWords,
        countOfWords: ++prevState.countOfWords,
      }));
      // Todo: Is setTarget used on the good situation || should use on handleInput function after checker()
      setTarget((prevTarget) => ++prevTarget);
      return;
    }
    setResult((prevState) => ({
      ...prevState,
      inCorrectWords: ++prevState.inCorrectWords,
    }));
    return;
  }

  function reset(): void {
    setSeconds(60);
    setIsStarted(false);
    setInputValue('');
    setIsResultRender(false);
  }

  // Todo: 'What is the type of event that come from DOM'
  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    if (value.startsWith(' ')) return;
    setIsStarted(true);
    setInputValue(value);
    if (value.endsWith(' ')) {
      checker(value);
      setInputValue('');
    }
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
                theme={index === target ? 'bg-cyan-400' : 'bg-sky-50'}
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
      <TResultBox data={result} isRender={isResultRender} />
    </>
  );
};
