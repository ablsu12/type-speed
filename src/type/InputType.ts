import { ChangeEvent } from 'react';

export interface InputProps {
  value: string;
  inputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}
