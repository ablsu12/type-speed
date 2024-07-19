import React from 'react';

export interface WordContainerProps {
  children: React.ReactElement;
}

export interface ResultFace {
  correctWords: number;
  inCorrectWords: number;
  countOfWords: number;
}
