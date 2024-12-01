import {ArrowLongLeftIcon, MinusCircleIcon, PlusCircleIcon} from '@heroicons/react/24/outline';
import {useAtom} from 'jotai';
import {useState} from 'react';
import {useLoaderData, useLocation, useNavigate} from 'react-router-dom';
import {Navbar} from '../../components/nav';
import {useLoggedInState} from '../../model/context/context';
import {coupon} from '../../model/jotai/atom';
import {getMyCart, getProductDetail, getUserProfile, updateCart} from '../../service/service';

/**
 * @typedef {[string, {title: string, price: number, thumbnail: string, brand: string, quantity: number}]} CartDetail
 */

/** @typedef {Exclude<Awaited<ReturnType<typeof getMyCartDuplicateLoader>>, Response>} ReturnMyCartLoader */

export const getMyCartDuplicateLoader = () => {
  const myCartFromLocalStorage = /** @type {{id: string, quantity: number} | {}} */ (JSON.parse(localStorage.getItem('myCart') || '{}'));

  if (Object.keys(myCartFromLocalStorage).length === 0) {
    return getUserProfile().then((userProfile) => {
      return {userProfile, myCartDetail: null, myCartFromLocalStorage: {}};
    });
  }

  /**
   * @returns {Promise<CartDetail[]>}
   */
  const getMyCartDetail = Promise.all(
    Object.entries(myCartFromLocalStorage).map(([id, quantity]) =>
      getProductDetail(id).then((detail) => {
        const {title, price, thumbnail, brand} = detail;
        return [id, {title, price, thumbnail, brand, quantity}];
      })
    )
  );

  return Promise.all([getMyCartDetail, getUserProfile()]).then(([myCartDetail, userProfile]) => ({
    myCartDetail,
    userProfile,
    myCartFromLocalStorage,
  }));
};

/**
 * @type {React.FC}
 */
export const CartDuplicate = () => {
  const [selectedDiscountedBrands, setSelectedDiscountedBrands] = useAtom(coupon);
  const {myCartDetail, userProfile, myCartFromLocalStorage} = /** @type {ReturnMyCartLoader} */ (useLoaderData());
  const profileData = userProfile?.profileData;
  const navigate = useNavigate();
  const location = useLocation();

  const {isLoggedIn} = useLoggedInState();
  const [updateMyCartDetail, setUpdateMyCartDetail] = useState(myCartDetail);
  const [checkout, setCheckout] = useState(false);

  const productTotal = Number(
    updateMyCartDetail
      ?.map(([id, {price, quantity, brand}]) => {
        if (selectedDiscountedBrands.includes(brand)) {
          return Number(((price / 2) * quantity).toFixed(2));
        }
        return Number((price * quantity).toFixed(2));
      })
      .reduce((acc, cur) => acc + cur)
      .toFixed(2)
  );

  const oriTotal = Number(
    updateMyCartDetail
      ?.map(([id, {price, quantity}]) => Number((price * quantity).toFixed(2)))
      .reduce((acc, cur) => acc + cur)
      .toFixed(2)
  );

  const couponDiscount = oriTotal - productTotal;

  const deliveryFee = Number((productTotal * 0.1).toFixed(2));

  /**
   * @param {string} id
   * @param {number} updateQuantity
   */
  const updateQuantity = (id, updateQuantity) => {
    if (updateQuantity === 0) {
      delete myCartFromLocalStorage[id];
    } else {
      myCartFromLocalStorage[id] = updateQuantity;
    }
    localStorage.setItem('myCart', JSON.stringify(myCartFromLocalStorage));
    // - Feature 更新數量
    // 方法1： 缺點需重新打API、優點直接修改源頭local storage
    // 透過 navigate 重新執行 loader 讓產品數量顯示正確
    // navigate(0);
    // 方法2： 缺點 detail 和 local storage 脫鉤
    setUpdateMyCartDetail((pre) => {
      const obj = Object.fromEntries(pre);
      obj[id].quantity = updateQuantity;
      if (obj[id].quantity === 0) {
        delete obj[id];
      }
      if (Object.entries(obj).length === 0) {
        localStorage.removeItem('myCart');
        return null;
      }
      return Object.entries(obj);
    });
  };

  const clearMyCart = () => {
    localStorage.removeItem('myCart');
    setUpdateMyCartDetail(null);
  };

  return (
    <div>
      {checkout ? (
        <div className='absolute px-6 pt-4 pb-[80px]'>
          <header className='sticky top-0 flex justify-between items-center bg-white'>
            <button
              className='flex justify-center items-center size-8'
              onClick={() => setCheckout(false)}>
              <ArrowLongLeftIcon className='size-5' />
            </button>
            <div className='flex gap-3 text-lg font-semibold'>結帳</div>
            <div className='size-8' />
          </header>
          <div>
            <div className='mb-2 p-4 rounded-3xl shadow-lg'>
              <div className='mb-2 font-semibold'>項目</div>
              <div className='divide-y'>
                {updateMyCartDetail.map(([id, {title, price, thumbnail, quantity}]) => (
                  <div
                    key={String(id)}
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
                      <div>{`$${(price * quantity).toFixed(2)}`}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='mb-2 p-4 rounded-3xl shadow-lg'>
              <div className='mb-2 font-semibold'>價格</div>
              <div className='divide-y'>
                <div>
                  <div className='flex justify-between items-center mb-3'>
                    <div>優惠券</div>
                    <div className={`${couponDiscount > 0 ? 'text-red-500' : 'text-black'}`}>{couponDiscount > 0 ? `- $${couponDiscount.toFixed(2)}` : couponDiscount.toFixed(2)}</div>
                  </div>
                  <div className='flex justify-between items-center mb-3'>
                    <div>小計</div>
                    <div>{`$${productTotal}`}</div>
                  </div>
                  <div className='flex justify-between items-center mb-3'>
                    <div>運費</div>
                    <div>{`$${deliveryFee}`}</div>
                  </div>
                </div>
                <div className='flex justify-between items-center pt-3'>
                  <div>訂單總額</div>
                  <div className='font-bold'>{`$${(Number(productTotal) + Number(deliveryFee)).toFixed(2)}`}</div>
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
          <div className='fixed bottom-0 left-0 right-0 px-6 py-[8px] flex justify-between items-center h-[64px] rounded-t-3xl text-white bg-white'>
            <div>
              <button
                onClick={() => {
                  // 透過 '/api/cart/my' 回傳的 { id: 21, userId: 1, products: []}
                  // 拿到 id 再去 put '/api/cart/${id}'
                  getMyCart()
                    .then((cart) => {
                      return cart.id;
                    })
                    .then((id) => {
                      const myCart = Object.keys(JSON.parse(localStorage.getItem('myCart'))).map((productId) => Number(productId));
                      return updateCart(id, myCart).then((cart) => {
                        if (cart.id === id) {
                          localStorage.removeItem('myCart');
                          navigate('/order', {state: {grandTotal: (productTotal + deliveryFee).toFixed(2)}});
                        }
                      });
                    });
                }}
                className='fixed bottom-[70px] left-6 right-6 h-[64px] rounded-2xl font-bold text-lg text-white bg-black'>
                結帳
              </button>
              <section
                className='h-[80px]'
                data-desc='墊button底下空間'
              />
            </div>
          </div>
          <Navbar />
        </div>
      ) : (
        <div className={`w-full h-dvh px-6 pb-4`}>
          <div className='sticky top-0 bg-white'>
            <div className='pt-8' />
            <div className='flex justify-between items-center pb-4'>
              <div className='text-2xl font-bold'>購物車</div>
              {updateMyCartDetail && (
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

          {updateMyCartDetail ? (
            <>
              {updateMyCartDetail.map(([id, {title, price, thumbnail, quantity}]) => (
                <div
                  key={String(id)}
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
                        <button onClick={() => updateQuantity(String(id), quantity - 1)}>
                          <MinusCircleIcon className='size-6' />
                        </button>
                        <span>{quantity}</span>
                        <button onClick={() => updateQuantity(String(id), quantity + 1)}>
                          <PlusCircleIcon className='size-6' />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col items-center'>
                    <div>{`$${(price * quantity).toFixed(2)}`}</div>
                  </div>
                </div>
              ))}
              <div className='flex justify-between items-center p-3'>
                <div>
                  品牌折價券: {selectedDiscountedBrands.length > 1 && <br />} {`${selectedDiscountedBrands.join(',')} 50%`}
                </div>
                <div className={`border p-2 rounded-xl ${couponDiscount > 0 ? 'text-red-500' : 'text-black'}`}>{couponDiscount > 0 ? `- $${couponDiscount.toFixed(2)}` : couponDiscount.toFixed(2)}</div>
              </div>
              <div>
                <div className='flex justify-between mt-8 p-4 font-bold'>
                  <div>小計</div>
                  <div>{`$${productTotal}`}</div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      isLoggedIn ? setCheckout(true) : navigate('/login', {state: {from: location}});
                    }}
                    className='fixed bottom-[70px] left-6 right-6 h-[64px] rounded-2xl font-bold text-lg text-white bg-black'>
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
    </div>
  );
};
