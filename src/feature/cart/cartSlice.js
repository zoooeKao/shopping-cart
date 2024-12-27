import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: /** @type {Record<number, number>} */ ({}),
  reducers: {
    increase: (state, action) => {
      const {itemId} = action.payload;
      state[itemId] = (state[itemId] || 0) + 1;
    },
    decrease: (state, action) => {
      const {itemId} = action.payload;
      if (state[itemId] > 1) {
        state[itemId] -= 1;
      } else {
        delete state[itemId];
      }
    },
    clearCart: () => {
      return {};
    },
  },
});

export const couponSlice = createSlice({
  name: 'coupon',
  initialState: [],
  reducers: {
    addToCoupon: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: false,
  reducers: {
    authLogin: () => {
      return true;
    },
    authLogout: () => {
      return false;
    },
  },
});

export const {increase, decrease, clearCart} = cartSlice.actions;
export const {addToCoupon} = couponSlice.actions;
export const {authLogin, authLogout} = authSlice.actions;
