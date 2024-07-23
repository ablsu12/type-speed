import { InputProps } from "../type/type.ts";

export const TInput = ({ value, inputHandler }: InputProps) => {
  return (
    <input
      className={"w-96 h-12 mx-2 px-4 font-bold rounded-md outline-none"}
      onInput={inputHandler}
      value={value}
    />
  );
};
