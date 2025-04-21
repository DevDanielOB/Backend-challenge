import { MakeAllPositive } from "../types/makeAllPositive.types";

export const makeAllPositive: MakeAllPositive = (listOfNumbers) => {
    if (listOfNumbers.length === 0) {
        console.error('Empty array input');
    }
    return listOfNumbers.map((num) => Math.abs(num));
}