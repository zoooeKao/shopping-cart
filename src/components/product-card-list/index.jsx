import {HeartIcon} from '@heroicons/react/24/outline';
import {PlusCircleIcon} from '@heroicons/react/24/solid';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {getLocalCart, setLocalCart} from '../../model/storage/my-cart';
import {PopupAddItem} from '../popup-add-item';

/**
 * @type {React.FC<{productList: (import('../../env').Product)[], style: string }>}
 */
export const ProductCardList = ({productList, style}) => {
  const [toAddProduct, setToAddProduct] = useState(/** @type {{title: string; id: number} | null} */ (null));

  /**
   * @param {number} id
   */
  const handleConfirm = (id) => {
    const localCart = /** @type {import('../../env').LocalCart} **/ (getLocalCart());
    // Code review: 驗證第三方套件zod，辨別 localStorage 拿回的資料是否正確
    // Code review: JSON.parse 可能 throw error，要放可以反序列化的資料，否則會 throw syntax error。 JSON.parse('"abc"') //=> 'abc'  JSON.stringify('abc') //=> '"abc"'  JSON.parse('abc') //=> syntax error
    localCart[id] = (localCart[id] || 0) + 1;

    // session vs useContext
    // Question: 資料的存續與APP存續同步時，孰優孰劣
    setLocalCart(localCart);
    setToAddProduct(null);
  };

  const handleCancel = () => {
    setToAddProduct(null);
  };

  return (
    <div className={style}>
      {toAddProduct && (
        <PopupAddItem
          message={`確認要將 ${toAddProduct.title} 加入購物車嗎?`}
          onConfirm={() => handleConfirm(toAddProduct.id)}
          onCancel={handleCancel}
        />
      )}
      {productList.map(({id, title, discountPercentage, price, thumbnail, description}) => {
        const oriPrice = (price / ((100 - Math.round(discountPercentage)) / 100)).toFixed(2);
        return (
          <div
            key={id}
            className='shrink-0 relative pt-3 px-3 w-[154px] h-[228px] rounded-2xl bg-white shadow-xl mx-auto'>
            <Link
              to='/product-description'
              state={{id, title, price, description, thumbnail}}>
              <div className='flex justify-between'>
                <span className='flex justify-center items-center w-[35px] h-[20px] rounded-md font-semibold text-xs text-white bg-red-primary'>{Math.round(discountPercentage)}%</span>
                <button type='button'>
                  <HeartIcon className='size-5' />
                </button>
              </div>
              <img
                src={thumbnail}
                className='w-full h-[90px]'
              />
              <div className='text-center mt-4 line-clamp-2'>{title}</div>
              <div className='flex justify-evenly mt-1'>
                <div className='text-sm font-extrabold'>{`$${price}`}</div>
                <div className='text-sm font-medium line-through text-zinc-400'>{`$${oriPrice}`}</div>
              </div>
              <button
                type='button'
                onClick={(event) => {
                  event.preventDefault();
                  setToAddProduct({id, title});
                }}
                className='absolute left-[50%] bottom-0 -translate-x-1/2 translate-y-1/2 rounded-full'>
                <PlusCircleIcon className='size-12 text-green-primary' />
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
