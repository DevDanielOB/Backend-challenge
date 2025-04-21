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