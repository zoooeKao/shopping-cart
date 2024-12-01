import {atom} from 'jotai';
import {atomWithStorage} from 'jotai/utils';

export const coupon = atom(/** @type {Array<string>} */ ([]));

export const loggedIn = atom(false);

export const theme = atomWithStorage('color', false);

// localStorage.setItem('myCart'

// ProductsLists
// ProductCardList
// useAtom(coupon)

// selectedDiscountedBrands
// setSelectedDiscountedBrands
// discountedBrands
