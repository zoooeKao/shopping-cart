import {ArrowLongLeftIcon, MinusCircleIcon, PlusCircleIcon} from '@heroicons/react/24/outline';
import Decimal from 'decimal.js';
import {useAtom} from 'jotai';
import {useState} from 'react';
import {useLoaderData, useLocation, useNavigate} from 'react-router-dom';
import {Navbar} from '../../components/nav';
import {MaxWidth} from '../../components/wrapper/outside-wrapper';
import {toFixedNumber} from '../../model/format/toFixed-number';
import {coupon, loggedIn} from '../../model/jotai/atom';
import {clearLocalCart, getLocalCart, setLocalCart} from '../../model/storage/my-cart';
import {getMyCart, getProductDetail, getUserProfile, updateCart} from '../../service/service';
import {styles} from '../../style';

/**
 * @typedef {{id: string; title: string; price: number; thumbnail: string; brand: string; quantity: number}} CartItem
 */

/** @typedef {Exclude<Awaited<ReturnType<typeof getMyCartLoader>>, Response>} ReturnCartLoader */
export const getMyCartLoader = () => {
  const localCart = getLocalCart();

  if (Object.keys(localCart).length === 0) {
    return getUserProfile().then((userProfile) => {
      return {cartItems: [], userProfile};
    });
  }

  /**
   * @type {Promise<CartItem[]>}
   */
  const getMyCartDetail = Promise.all(
    Object.entries(localCart).map(([id, quantity]) =>
      getProductDetail(id).then((detail) => {
        const {title, price, thumbnail, brand} = detail;
        return {id, title, price, thumbnail, brand, quantity};
      })
    )
  );

  return Promise.all([getMyCartDetail, getUserProfile()]).then(([cartItems, userProfile]) => ({
    cartItems,
    userProfile,
  }));
};

/**
 * @type {React.FC}
 */
export const Cart = () => {
  const [selectedDiscountedBrands, setSelectedDiscountedBrands] = useAtom(coupon);
  const [isLoggedIn, setIsLoggedIn] = useAtom(loggedIn);
  const {cartItems: _cartItems, userProfile} = /** @type {ReturnCartLoader} */ (useLoaderData());
  const profileData = userProfile?.profileData;
  const navigate = useNavigate();
  const location = useLocation();

  const [cartItems, setCartItems] = useState(_cartItems);
  const [checkout, setCheckout] = useState(false);

  /**
   * @param {string} id
   * @param {number} updateQuantity
   */
  const updateQuantity = (id, updateQuantity) => {
    // Code review: 注意資料流
    // localStorage => localCart => cartItems
    // cartItems => localCart => localStorage
    const obj = Object.fromEntries(cartItems.map((item) => [item.id, item]));
    obj[id].quantity = updateQuantity;
    if (obj[id].quantity === 0) {
      delete obj[id];
    }
    const updateCartItems = Object.values(obj);
    setCartItems(updateCartItems);

    setLocalCart(Object.fromEntries(updateCartItems.map(({id, quantity}) => [id, quantity])));
  };

  /** @type {()=>void} */
  const clearMyCart = () => {
    clearLocalCart();
    setCartItems([]);
  };

  /** @type {{originalTotal: number, discountTotal: number, subTotal: number}} */
  const totalTable = cartItems.reduce(
    (totalTable, {price: _price, quantity, brand}) => {
      const price = new Decimal(_price);
      const itemTotal = price.times(quantity);
      totalTable.originalTotal = toFixedNumber(itemTotal.plus(totalTable.originalTotal));
      // totalTable.originalTotal = toFixedNumber(totalTable.originalTotal + itemTotal);
      totalTable.discountTotal = toFixedNumber(totalTable.discountTotal + (selectedDiscountedBrands.includes(brand) ? toFixedNumber(itemTotal.dividedBy(2)) : 0));
      totalTable.subTotal = toFixedNumber(totalTable.originalTotal - totalTable.discountTotal);
      return totalTable;
    },
    {originalTotal: 0, discountTotal: 0, subTotal: 0}
  );

  return (
    <MaxWidth>
      {checkout && cartItems.length !== 0 ? (
        (() => {
          const deliveryFee = toFixedNumber(new Decimal(totalTable.subTotal).times(0.1));
          return (
            // <div className='absolute mx-auto max-w-[375px] px-6 pt-4 pb-[80px]'>
            <div className='w-full h-dvh px-6 pb-4'>
              <header className='sticky top-0  bg-white'>
                <div className='pt-8' />

                <div className='flex justify-between items-center pb-4'>
                  <button
                    className='flex justify-center items-center size-8'
                    onClick={() => setCheckout(false)}>
                    <ArrowLongLeftIcon className='size-5' />
                  </button>
                  <div className='flex gap-3 text-lg font-semibold'>結帳</div>
                  <div className='size-8' />
                </div>
              </header>

              <div>
                <div className='mb-2 p-4 rounded-3xl shadow-lg'>
                  <div className='mb-2 font-semibold'>項目</div>
                  <div className='divide-y'>
                    {cartItems.map(({id, title, price: _price, thumbnail, quantity}) => {
                      const price = new Decimal(_price);
                      return (
                        <div
                          key={id}
                          className='flex justify-between py-2'>
                          <div className='flex'>
                            <img
                              src={thumbnail}
                              alt='商品圖'
                              className='size-[60px]'></img>
                            <div className='flex flex-col gap-1'>
                              <div>{title}</div>
                              <div className='text-slate-400'>x{quantity}</div>
                            </div>
                          </div>
                          <div>
                            <div>{`$${price.times(quantity).toFixed(2)}`}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className='mb-2 p-4 rounded-3xl shadow-lg'>
                  <div className='mb-2 font-semibold'>價格</div>
                  <div className='divide-y'>
                    <div>
                      <div className='flex justify-between items-center mb-3'>
                        <div>優惠券</div>
                        <div className={`${totalTable.discountTotal > 0 ? 'text-red-500' : 'text-black'}`}>
                          {totalTable.discountTotal > 0 ? '-' : ''}${totalTable.discountTotal}
                        </div>
                      </div>
                      <div className='flex justify-between items-center mb-3'>
                        <div>小計</div>
                        <div>{`$${totalTable.subTotal}`}</div>
                      </div>
                      <div className='flex justify-between items-center mb-3'>
                        <div>運費</div>
                        <div>{`$${deliveryFee}`}</div>
                      </div>
                    </div>
                    <div className='flex justify-between items-center pt-3'>
                      <div>訂單總額</div>
                      <div className='font-bold'>{`$${toFixedNumber(totalTable.subTotal + deliveryFee)}`}</div>
                    </div>
                  </div>
                </div>
                <div className='mb-2 p-4 rounded-3xl shadow-lg'>
                  <div className='mb-2 font-semibold'>發貨資訊</div>
                  <div className='flex justify-between items-center mb-3'>
                    <div>收件人</div>
                    <div>
                      {profileData.firstName} {profileData.lastName}
                    </div>
                  </div>
                  <div className='flex justify-between items-center mb-3'>
                    <div>手機號碼</div>
                    <div>{profileData.phone}</div>
                  </div>
                  <div className=''>
                    <div>地址</div>
                    <div className=''>{`${profileData.address.address} ${profileData.address.city}, ${profileData.address.stateCode} ${profileData.address.postalCode} ${profileData.address.country} `}</div>
                  </div>
                </div>
              </div>

              <section
                className='h-[80px]'
                data-desc='empty-space-under-button"'
              />
              <div className={`${styles.fixedMaxWidthMaxAuto} bottom-[70px] h-[64px] rounded-2xl font-bold text-lg text-white bg-black`}>
                <button
                  onClick={() => {
                    // 透過 '/api/cart/my' 回傳的 { id: 21, userId: 1, products: []}
                    // 拿到 id 再去 put '/api/cart/${id}'
                    getMyCart()
                      .then((cart) => {
                        return cart.id;
                      })
                      .then((cartId) => {
                        const localCartKeys = Object.entries(getLocalCart())
                          .map(([id, quantity]) => Array(quantity).fill(Number(id)))
                          .flat();
                        return updateCart(cartId, localCartKeys).then((cart) => {
                          if (cart.id === cartId) {
                            clearLocalCart();
                            navigate('/order', {state: {grandTotal: toFixedNumber(totalTable.subTotal + deliveryFee)}});
                          }
                        });
                      });
                  }}
                  className='flex justify-center items-center w-full h-full'>
                  結帳
                </button>
              </div>
              <Navbar />
            </div>
          );
        })()
      ) : (
        <div className={`w-full h-dvh px-6 pb-4`}>
          <div className='sticky top-0 bg-white'>
            <div className='pt-8' />
            <div className='flex justify-between items-center pb-4'>
              <div className='text-2xl font-bold'>購物車</div>
              {cartItems.length !== 0 && (
                <button
                  onClick={() => {
                    isLoggedIn ? clearMyCart() : navigate('/login', {state: {from: location}});
                  }}
                  className='p-2 text-gray-400 border border-gray-400 rounded-xl'>
                  清空
                </button>
              )}
            </div>
          </div>

          {cartItems.length !== 0 ? (
            <>
              {cartItems.map(({id, title, price: _price, thumbnail, quantity}) => {
                const price = new Decimal(_price);
                return (
                  <div
                    key={id}
                    className='flex justify-between items-center gap-2 mb-2 p-4 rounded-3xl shadow-lg'>
                    <div className='flex items-center gap-[12px]'>
                      <img
                        src={thumbnail}
                        alt='商品圖'
                        className='size-[60px]'
                      />
                      <div className='flex flex-col'>
                        <span>{title}</span>
                        <div className='flex items-center gap-2'>
                          <button onClick={() => updateQuantity(id, quantity - 1)}>
                            <MinusCircleIcon className='size-6' />
                          </button>
                          <span>{quantity}</span>
                          <button onClick={() => updateQuantity(id, quantity + 1)}>
                            <PlusCircleIcon className='size-6' />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col items-center'>
                      <div>{`$${price.times(quantity).toFixed(2)}`}</div>
                    </div>
                  </div>
                );
              })}

              {totalTable.discountTotal > 0 && (
                <div className='flex justify-between items-center p-3'>
                  <div>
                    品牌折價券: {selectedDiscountedBrands.length !== 0 && <br />} {`${selectedDiscountedBrands.join(',')} 50%`}
                  </div>
                  <div className='border p-2 rounded-xl text-red-500'>{`- $${totalTable.discountTotal.toFixed(2)}`}</div>
                </div>
              )}

              <div>
                <div className='flex justify-between mt-8 p-4 font-bold'>
                  <div>小計</div>
                  <div>{`$${totalTable.subTotal}`}</div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      isLoggedIn ? setCheckout(true) : navigate('/login', {state: {from: location}});
                    }}
                    // fixed left-0 right-0 max-w-[375px] mx-auto bottom-[70px] h-[64px] rounded-2xl font-bold text-lg text-white bg-black
                    className={`${styles.fixedMaxWidthMaxAuto} bottom-[70px] h-[64px] rounded-2xl font-bold text-lg text-white bg-black`}>
                    立即結帳
                  </button>
                  <section
                    className='h-[80px]'
                    data-desc='墊button底下空間'
                  />
                </div>
              </div>
            </>
          ) : (
            <div className='fixed inset-0 flex flex-col items-center justify-center'>
              <div className='mx-auto'>
                <img src='/img-empty-cart/empty-cart.png' />
              </div>
              <div className='mt-[28px] text-2xl font-bold'>您的購物車是空的</div>
              <p className='mt-4 text-gray-400'>
                看來您還沒做出選擇。
                <br />
                hello我們去購物吧!
              </p>
            </div>
          )}
          <Navbar />
        </div>
      )}
    </MaxWidth>
  );
};
