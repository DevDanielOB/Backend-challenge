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
          throw new Error(`Invalid operation: ${operation}`);
    }
    return result;
}
