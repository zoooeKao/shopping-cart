import {Navbar} from '../../components/nav';

export const EmptyCart = () => {
  return (
    <>
      <main className='h-[calc(100%-62px)] flex flex-col justify-center items-center'>
        <div>
          <div className='h-[256px] mx-auto'>
            <img src='../../../public/empty-cart/empty-cart.png' />
          </div>
          <div className='mt-[28px] text-2xl font-bold text-center'>您的購物車是空的</div>
          <p className='mt-4 text-gray-400 text-center'>
            看來您還沒做出選擇。
            <br />
            hello我們去購物吧!
          </p>
        </div>
      </main>
      <Navbar />
    </>
  );
};
