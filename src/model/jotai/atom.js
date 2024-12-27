import {atom} from 'jotai';

export const coupon = atom(/** @type {Array<string>} */ ([]));

export const loggedIn = atom(false);
