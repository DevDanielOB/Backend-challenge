import { Calculate } from "../types/calculate.types";

export const calculate: Calculate = (operation, a, b) => {
    let result: number = 0;

    switch (operation) {
        case 'add':
          result = a + b;
          break;

        case 'subtract':
          result = a - b;
          break;
        
        case 'multiply':
          result = a * b;
          break;
        
        case 'divide':
          if (b === 0) {
            throw new Error(`Division by zero: attempted to divide ${a} by ${b}`);
          }
          result = a / b;
          break;
        
        default:
          // This case should theoretically never occur, but you never know!
          throw new Error(`Invalid operation: ${operation}`);
    }
    return result;
}

// For direct testing without automated tests (uncomment the following block) - Use:
// yarn ts-node src/typescript/calculate.ts
// console.log(calculate('multiply', 1, 5));
