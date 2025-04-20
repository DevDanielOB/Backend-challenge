import { Item } from "../types/item.types";
  function isExpensive(item: Item): boolean {
    return item.price > 100;
  }
  
  export function processItems(items: Item[]): void {
    for (const item of items) {
      if (isExpensive(item)) {
        console.log(`item ${item.name} is expensive`);
      }
    }
  }

  // Use:
  // yarn ts-node src/clean-code/processItems.ts

//   const items: Item[] = [
//     { name: 'Banana', price: 50 },
//     { name: 'Apple', price: 150 },
//     { name: 'Orange', price: 250 },
//   ];
  
//   processItems(items);