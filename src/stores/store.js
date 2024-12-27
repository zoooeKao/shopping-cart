import {configureStore} from '@reduxjs/toolkit';
import {authSlice, cartSlice, couponSlice} from '../feature/cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    coupon: couponSlice.reducer,
    auth: authSlice.reducer,
  },
});
