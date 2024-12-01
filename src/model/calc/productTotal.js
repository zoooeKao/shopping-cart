import {toFixedNumber} from '../format/toFixed-number';
/**
 * @typedef {{id: string; title: string; price: number; thumbnail: string; brand: string; quantity: number}} CartItem
 */

/**
 * @param {CartItem[]} list
 * @param {string[]} selectedDiscountedBrands
 * @returns
 */
export const getOriginalTotal = (list, selectedDiscountedBrands) => {
  return toFixedNumber(
    list
      .map(({price, quantity, brand}) => {
        if (selectedDiscountedBrands.includes(brand)) {
          return toFixedNumber((price / 2) * quantity);
        }
        return toFixedNumber(price * quantity);
      })
      .reduce((acc, cur) => acc + cur)
  );
};
