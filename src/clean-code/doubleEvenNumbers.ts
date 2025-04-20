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

  // Use:
  // yarn ts-node src/clean-code/doubleEvenNumbers.ts

//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const doubledEvens = doubleEvenNumbers(numbers);
//   console.log(doubledEvens);