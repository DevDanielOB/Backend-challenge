import { MakeAllPositive } from "../types/makeAllPositive.types";

export const makeAllPositive: MakeAllPositive = (listOfNumbers) => {
    if (listOfNumbers.length === 0) {
        console.error('Empty array input');
    }
    return listOfNumbers.map((num) => Math.abs(num));
}

// For direct testing without automated tests (uncomment the following block)- Use:
// yarn ts-node src/typescript/makeAllPositive.ts
console.log(makeAllPositive([1, -2, 3, -4, 5]));