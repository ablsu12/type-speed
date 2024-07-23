import { TInput } from "./TInput.tsx";
import { TButton } from "./TButton.tsx";
import { ChangeEvent, useEffect, useState } from "react";
import { TWordBox } from "./TWordBox.tsx";
import { ResultFace } from "../type/type.ts";
import { TResultBox } from "./TResultBox.tsx";
import useFormatTime from "../hooks/useFormatTime.tsx";
import { wordsList } from "../info.json";
export const TContainer = () => {
  const [seconds, setSeconds] = useState(60);
  const [isStarted, setIsStarted] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [target, setTarget] = useState(0);
  const [isResultRender, setIsResultRender] = useState(false);
  const [userTypedWords, setUserTypedWords] = useState<string[]>([]);
  const [result, setResult] = useState<ResultFace>({
    correctWords: 0,
    inCorrectWords: 0,
  });

  useEffect(() => {
    if (isStarted && seconds > 0) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (seconds === 0) {
      setIsStarted(false);
      setIsResultRender(true);
      return;
    }
  }, [isStarted, seconds]);

  function updateData(inputValue: string): void {
    setUserTypedWords((prevTypedWords) => [
      ...prevTypedWords,
      inputValue.trim(),
    ]);
    if (wordsList[target] === inputValue.trim()) {
      setResult((prevState) => ({
        ...prevState,
        correctWords: prevState.correctWords + 1,
      }));
      return;
    }
    setResult((prevState) => ({
      ...prevState,
      inCorrectWords: prevState.inCorrectWords + 1,
    }));
    return;
  }

  function reset(): void {
    setSeconds(60);
    setIsStarted(false);
    setInputValue("");
    setTarget(0);
    setIsResultRender(false);
    setUserTypedWords([]);
  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    if (value.startsWith(" ")) return;
    setIsStarted(true);
    setInputValue(value);
    if (value.endsWith(" ")) {
      updateData(value);
      setInputValue("");
      setTarget((prevState) => prevState + 1);
    }
  };
  return (
    <>
      <div
        className={
          "w-3/4 h-72 p-4 bg-blue-300 flex flex-col rounded-md items-center"
        }
      >
        <div
          className={
            "w-full h-3/5 overflow-y-scroll flex justify-center flex-wrap"
          }
        >
          {wordsList.map((word, idx) => (
            <TWordBox
              value={word}
              status={
                idx === target
                  ? "active"
                  : idx > target
                    ? "pending"
                    : wordsList[idx] === userTypedWords[idx]
                      ? "correct"
                      : "wrong"
              }
            />
          ))}
        </div>
        <div className={"w-1/2 h-2/5 px-6 flex justify-center items-center"}>
          <TInput inputHandler={handleInput} value={inputValue} />
          <TButton value={useFormatTime(seconds)} />
          <TButton value={"Reset"} clickHandler={reset} />
        </div>
      </div>
      <TResultBox data={result} isRender={isResultRender} />
    </>
  );
};
