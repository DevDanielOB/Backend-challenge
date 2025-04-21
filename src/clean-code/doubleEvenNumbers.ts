import { doubleEvenNumbersType } from "../types/doubleEvenNumbers.types";

export const doubleEvenNumbers: doubleEvenNumbersType = (numbers) => {
  const doubledEvens: number[] = [];
    
  for (const number of numbers) {
    if (isEven(number)) {
      doubledEvens.push(double(number));
      }
    }
    
    return doubledEvens;
  }
  
  function isEven(number: number): boolean {
    return number % 2 === 0;
  }
  
  function double(number: number): number {
    return number * 2;
  }