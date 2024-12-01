import {useAtom} from 'jotai';
import {useState} from 'react';
import {Navigate, useLoaderData, useLocation} from 'react-router-dom';
import {Navbar} from '../../components/nav';
import {MaxWidth} from '../../components/wrapper/outside-wrapper';
import {getOriginalTotal} from '../../model/calc/productTotal';
import {toFixedNumber} from '../../model/format/toFixed-number';
import {coupon, loggedIn} from '../../model/jotai/atom';
import {getMyCart, getProductDetail, getUserProfile} from '../../service/service';

/** @typedef {Exclude<Awaited<ReturnType<typeof orderLoader>>, Response>} ReturnOrderLoader */

export const orderLoader = () => {
  // step 1:
  // /api/cart/my
  // const arr = [1,2,3] | [];
  // if (arr = []) return [];

  // step 2:
  // 整理資料
  // const obj = {
  //  id: quantity,
  //   1: 4,
  //   2: 2,
  //   80: 1,
  // };

  // step 3:
  // /api/product/:id && 整合step2
  // const combineObj = {
  //   id: {
  //     quantity: 4,
  //     img: '',
  //   },
  // };

  // step 4:
  // [  {id: {title, price}, ]
  // [ [id, {title, price, thumbnail, quantity}] , [id, {title, price, thumbnail, quantity}] ]
  //

  const firstName = getUserProfile().then((userProfile) => userProfile.profileData?.firstName);

  const orderedProducts = getMyCart().then((productPayload) => {
    const myOrdered = productPayload.products;

    // TODO: reduce
    const productTable = /** @type {Record<number, number>} */ ({});
    myOrdered.forEach((proId) => (productTable[proId] = (productTable[proId] || 0) + 1));

    return Promise.all(
      Object.entries(productTable).map(([id, quantity]) => {
        return getProductDetail(id).then((detail) => {
          const {title, price, thumbnail, brand} = detail;
          return {id, quantity, title, price, thumbnail, brand};
        });
      })
    );
  });

  return Promise.all([orderedProducts, firstName]).then(([orderedProducts, firstName]) => {
    return {
      orderedProducts,
      firstName,
    };
  });
};

/**
 * @type {React.FC}
 */
export const Order = () => {
  const [selectedDiscountedBrands, setSelectedDiscountedBrands] = useAtom(coupon);
  const [isLoggedIn, setIsLoggedIn] = useAtom(loggedIn);

  const {orderedProducts, firstName} = /** @type {ReturnOrderLoader} */ (useLoaderData());
  const location = useLocation();

  const [fold, setFold] = useState(false);

  return (
    <MaxWidth>
      {isLoggedIn ? (
        <div className='w-full h-dvh px-6 pb-4'>
          <div className='sticky top-0 w-full bg-white'>
            <div className='pt-8' />
            <div className='flex justify-between items-center pb-4'>
              <div className='text-2xl font-bold'>我的訂單</div>
            </div>
          </div>

          {orderedProducts.length !== 0 ? (
            <div>
              <ul className='flex justify-center gap-4'>
                <button className='flex flex-col items-center gap-2 p-2'>
                  <div className='flex justify-center items-center rounded-full border-black border-2 size-10 '>
                    <img src='/order/check.png' />
                  </div>
                  <div>已下單</div>
                </button>
                <button className='flex flex-col items-center gap-2 p-2'>
                  <div className='flex justify-center items-center rounded-full border-black border-2 size-10 '>
                    <img src='/order/pick.png' />
                  </div>
                  <div>賣家出貨</div>
                </button>
                <button className='flex flex-col items-center gap-2 p-2'>
                  <div className='flex justify-center items-center rounded-full border-black border-2 size-10 '>
                    <img src='/order/delivery.png' />
                  </div>
                  <div>配送中</div>
                </button>
                <button className='flex flex-col items-center gap-2 p-2'>
                  <div className='flex justify-center items-center rounded-full border-black border-2 size-10 '>
                    <img src='/order/feedback.png' />
                  </div>
                  <div>評價</div>
                </button>
              </ul>

              <div className='mb-2 p-4 rounded-3xl shadow-lg'>
                <div className='flex justify-between items-center mb-2 font-semibold'>
                  <div>{firstName}</div>
                  <div className='py-1.5 px-3 bg-teal-100  text-teal-600 rounded-md'>已下單</div>
                </div>
                <div className='divide-y'>
                  {(fold ? [orderedProducts[0]] : orderedProducts).map(({id, title, thumbnail, quantity}) => {
                    return (
                      <div
                        key={id}
                        className='flex justify-between py-2 '>
                        <div className='flex justify-between items-center w-full'>
                          <div className='flex items-center gap-2 w-full'>
                            <img
                              src={thumbnail}
                              alt='商品圖'
                              className='size-[60px]'
                            />
                            <div>{title}</div>
                          </div>
                          <div className='text-slate-400'>x{quantity}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className='my-3'>
                  <button
                    onClick={() => setFold(!fold)}
                    className='w-full font-bold'>
                    {fold ? '更多產品' : '更少產品'}
                  </button>
                </div>
                <div className='flex justify-between w-full mb-4'>
                  <div>{orderedProducts.length}項產品</div>
                  <div>{`$${toFixedNumber(getOriginalTotal(orderedProducts, selectedDiscountedBrands) * 1.1)}`}</div>
                </div>
                <div className='w-full h-[52px] flex justify-center items-center px-4 bg-black text-white rounded-xl'>
                  <button className='w-full font-bold'>收到</button>
                </div>
              </div>
            </div>
          ) : (
            <div className='fixed inset-0 flex flex-col items-center justify-center'>
              <div className='mx-auto'>
                <img src='/img-empty-order/empty-order.png' />
              </div>
              <div className='mt-[28px] text-2xl font-bold'>您的訂單是空的</div>
              <p className='mt-4 text-gray-400'>
                看來您還沒做出選擇。
                <br />
                hello我們去購物吧!
              </p>
            </div>
          )}

          <Navbar />
        </div>
      ) : (
        <Navigate
          to='/login'
          state={{from: location}}
          replace
        />
      )}
    </MaxWidth>
  );
};
