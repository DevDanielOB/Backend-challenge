import { calculateDiscount } from "../types/calculateDiscount.types";

export const getDiscountRate: calculateDiscount = (price, isPremiumCustomer) => {
    const isHighPrice = price > 100;
  
    if (isPremiumCustomer) {
      return isHighPrice ? 0.2 : 0.1;
    }
  
    return isHighPrice ? 0.1 : 0;
  }
  
  export const applyDiscount: calculateDiscount = (price, isPremiumCustomer) => {
    const discountRate = getDiscountRate(price, isPremiumCustomer);
    const finalPrice = price * (1 - discountRate);
    return finalPrice;
  }