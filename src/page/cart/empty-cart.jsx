import {Navbar} from '../../components/nav';
import emptyCart from './empty-cart.png';

export const EmptyCart = () => {
  return (
    // Question: 為什麼會出現Ｙ卷軸
    <div className='w-full h-dvh px-6 text-center'>
      <div className='h-full flex flex-col justify-center items-center '>
        <div className='h-[256px] mx-auto'>
          <img src={emptyCart} />
        </div>
        <div className='text-2xl font-bold mt-[28px]'>您的購物車是空的</div>
        <p className='text-gray-400 mt-4'>
          看來您還沒做出選擇。
          <br />
          hello我們去購物吧!
        </p>
      </div>
      <Navbar />
    </div>
  );
};
