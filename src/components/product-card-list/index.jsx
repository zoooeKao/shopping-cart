import {HeartIcon} from '@heroicons/react/24/outline';
import {PlusCircleIcon} from '@heroicons/react/24/solid';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {increase} from '../../feature/cart/cartSlice';
import {PopupAddItem} from '../popup-add-item';

/**
 * @type {React.FC<{productList: (import('../../env').Product)[], style: string }>}
 */
export const ProductCardList = ({productList, style}) => {
  const dispatch = useDispatch();
  const [toAddProduct, setToAddProduct] = useState(/** @type {{title: string; id: number} | null} */ (null));

  return (
    <div className={style}>
      {toAddProduct && (
        <PopupAddItem
          message={`確認要將 ${toAddProduct.title} 加入購物車嗎?`}
          onConfirm={() => {
            dispatch(increase({itemId: toAddProduct.id}));
            setToAddProduct(null);
          }}
          onCancel={() => {
            setToAddProduct(null);
          }}
        />
      )}
      {productList.map(({id, title, discountPercentage, price, thumbnail, description, images}) => {
        const oriPrice = (price / ((100 - Math.round(discountPercentage)) / 100)).toFixed(2);
        return (
          <div
            key={id}
            className='shrink-0 relative pt-3 px-3 w-[154px] h-[228px] rounded-2xl bg-white shadow-xl mx-auto'>
            <Link
              to='/product-description'
              state={{id, title, price, description, thumbnail, images: images[0]}}>
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
