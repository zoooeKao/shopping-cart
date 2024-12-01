import {HeartIcon} from '@heroicons/react/24/outline';
import {PlusCircleIcon} from '@heroicons/react/24/solid';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {PopupAddItem} from '../popup-add-item';

/**
 * @param {(import('../../env').Product)[]} param0.productList
 * @returns {JSX.Element}
 */
export const PromotionalList = ({productList}) => {
  const [wannaAddProduct, setWannaAddProduct] = useState(/** @type {{title: string; id: number} | null} */ (null));
  const myCart = /** @type {{id: number} | null} **/ (JSON.parse(localStorage.getItem('myCart')) || null);

  const handleConfirm = () => {
    let updateMyCart = myCart || {};

    if (updateMyCart[wannaAddProduct.id]) {
      updateMyCart[wannaAddProduct.id] += 1;
    } else {
      updateMyCart[wannaAddProduct.id] = 1;
    }

    localStorage.setItem('myCart', JSON.stringify(updateMyCart));
    setWannaAddProduct(null);
  };

  const handleCancel = () => {
    setWannaAddProduct(null);
  };

  return (
    <>
      <div className='flex gap-3'>
        {wannaAddProduct?.title && (
          <PopupAddItem
            message={`確認要將 ${wannaAddProduct.title} 加入購物車嗎?`}
            onConfirm={handleConfirm}
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
                    setWannaAddProduct({id, title});
                  }}
                  className='absolute left-[50%] bottom-0 -translate-x-1/2 translate-y-1/2 rounded-full'>
                  <PlusCircleIcon className='size-12 text-green-primary' />
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      {/* TODO */}
      {/* {showDialog ? (confirm('add') ? handleProductClick(products.title) : setShowDialog(false)) : ''} */}
      {/* 
            - showDialog
              - false 
                - default
                - click button cancel/yes
              - true
                - click <PlusCircleIcon/>
                - <CustomDialog>
                - confirm
                  - false
                  - true
                    - const box = localStorage.getItem('cart') || {}
                    - box[product]
                      - no (undefined)
                        - box[product] = 1
                      - yes
                        - box[product] += 1
                    - localStorage.setItem('cart', box)

         */}
    </>
  );
};
