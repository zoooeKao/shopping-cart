const LOCAL_CART_KEY = 'my_cart';

/** @return {import("../../env").LocalCart} */
export function getLocalCart() {
  return JSON.parse(localStorage.getItem(LOCAL_CART_KEY) || '{}');
}

/**
 * @param {import("../../env").LocalCart} localCart
 * @return {void}
 */
export function setLocalCart(localCart) {
  localStorage.setItem(LOCAL_CART_KEY, JSON.stringify(localCart));
}

/** @return {void} */
export function clearLocalCart() {
  localStorage.removeItem(LOCAL_CART_KEY);
}
