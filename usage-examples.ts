// 1. TypeScript Examples
import { calculate } from './src/typescript/calculate';
import { extractValues } from './src/typescript/extractValues';
import { makeAllPositive } from './src/typescript/makeAllPositive';
import { applyDiscount } from './src/clean-code/calculateDiscount';
import { doubleEvenNumbers } from './src/clean-code/doubleEvenNumbers';
import { processItems } from './src/clean-code/processItems';

console.log('--- calculate.ts ---');
console.log(calculate('multiply', 1, 5));

console.log('--- extractValues.ts ---');
const data = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];
console.log(extractValues(data, 'name'));

console.log('--- makeAllPositive.ts ---');
console.log(makeAllPositive([1, -2, 3, -4, 5]));

// 2. Clean Code Examples
console.log('--- calculateDiscount.ts ---');
const price = 110;
const isPremiumCustomer = true;
const finalPrice = applyDiscount(price, isPremiumCustomer);
console.log(`Final price: ${finalPrice}`);

console.log('--- doubleEvenNumbers.ts ---');
const numbers = [1, 2, 3, 4, 5, 6];
console.log(doubleEvenNumbers(numbers));

console.log('--- processItems.ts ---');
const items = [
  { name: 'Banana', price: 50 },
  { name: 'Apple', price: 150 },
  { name: 'Orange', price: 250 },
];
processItems(items);
