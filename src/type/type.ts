import { ChangeEvent } from "react";

export type FormatTime = (second: number) => string;

export interface ButtonProps {
  value: string;
  clickHandler?: () => void;
}

export interface InputProps {
  value: string;
  inputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface ResultBoxProps {
  data: ResultFace;
  isRender: boolean;
}

export type BgColor = "Green" | "Red" | "Blue";
export interface ResultProps {
  content: string;
  value: number;
  bgColor: BgColor;
}

export interface WordBoxProps {
  value: string;
  status: "pending" | "correct" | "wrong" | "active";
}

export interface ResultFace {
  correctWords: number;
  inCorrectWords: number;
}
