import {ArrowLongLeftIcon, HeartIcon, ShareIcon} from '@heroicons/react/24/outline';
import {PlusCircleIcon} from '@heroicons/react/24/solid';
import {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {PopupAddItem} from '../../components/popup-add-item';
import {getLocalCart, setLocalCart} from '../../model/storage/my-cart';
import {styles} from '../../style';

export const ProductDescription = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // Code review: 先驗證 location.state
  const {id, title, price, description, thumbnail, images} = location.state;
  const [toAddProduct, setToAddProduct] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  /** @type {(redirect?: boolean) => void} */
  const handleConfirm = (redirect) => {
    const localCart = /** @type {import('../../env').LocalCart} **/ (getLocalCart());
    localCart[id] = (localCart[id] || 0) + 1;
    setLocalCart(localCart);
    redirect ? navigate('/cart') : setToAddProduct(false);
  };

  const handleCancel = () => {
    setToAddProduct(false);
  };

  return (
    <>
      {toAddProduct && (
        <PopupAddItem
          message={`確認要將 ${title} 加入購物車嗎?`}
          onConfirm={() => handleConfirm()}
          onCancel={handleCancel}
        />
      )}
      <header className={`${styles.fixedMaxWidthMaxAuto} flex justify-between pt-3 px-6 bg-white`}>
        <button
          className='flex justify-center items-center size-8'
          onClick={() => navigate(-1)}>
          <ArrowLongLeftIcon className='size-5' />
        </button>
        <div className='flex gap-3'>
          <button className='flex justify-center items-center size-8'>
            <ShareIcon className='size-5' />
          </button>{' '}
          <button className='flex justify-center items-center size-8'>
            <HeartIcon className='size-5' />
          </button>
        </div>
      </header>

      <main className='max-w-[375px] mx-auto p-6'>
        {/* skeleton */}
        {/* <div
            id='skeleton'
            ref={skeletonRef}
            className='w-full h-96 bg-gray-500/70 animate-pulse'></div> */}
        <img
          onLoad={() => {
            // hide skeleton and remove opacity-0
            setImgLoaded(true);
          }}
          src={images}
          className={`mt-10 w-full object-cover ${imgLoaded ? 'h-full' : 'opacity-0 h-80 bg-gray-500/40 animate-pulse'}`}
        />
        <div className='mt-2 text-[20px] leading-6 font-black'>{title}</div>
        <div className='mt-2 text-green-primary leading-6 font-medium'>{`$${price}`}</div>
        <div className='mt-3 text-justify'>{description}</div>
      </main>

      <nav className={`${styles.fixedMaxWidthMaxAuto} bottom-0 px-6 py-[8px] flex justify-between items-center h-[64px] rounded-t-3xl text-white bg-white`}>
        <button
          type='button'
          onClick={(event) => {
            event.preventDefault();
            setToAddProduct(true);
          }}
          className='h-full aspect-square rounded-full text-white'>
          <PlusCircleIcon className='text-black' />
        </button>
        <button
          type='button'
          onClick={(event) => {
            event.preventDefault();
            handleConfirm(true);
          }}
          className='w-[280px] h-full flex justify-center items-center rounded-full font-bold text-lg bg-teal-400'>
          立即結帳
        </button>
      </nav>
    </>
  );
};
