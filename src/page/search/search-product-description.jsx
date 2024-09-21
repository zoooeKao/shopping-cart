import {ArrowLeftIcon, HeartIcon, ShareIcon} from '@heroicons/react/24/outline';
import {PlusCircleIcon} from '@heroicons/react/24/solid';

export const SearchProductDescription = ({}) => {
  return (
    <div className='absolute px-6 pt-4 pb-[80px]'>
      <div className=''>
        <header className='fixed left-6 right-6 top-0 pt-3 flex justify-between bg-white'>
          <button className='flex justify-center items-center size-8'>
            <ArrowLeftIcon className='size-5' />
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

        <main>
          {/* TODO: 預留空間 */}
          <img src='https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png' className='mt-[35px]' />
          <div className='text-[20px] leading-6 font-black'>Essence Mascara Lash Princess</div>
          <div className='mt-2 text-green-primary leading-6 font-medium'>$9.99</div>
          <div className='mt-3 text-justify'>The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.</div>
        </main>

        <nav className='fixed bottom-0 left-0 right-0 px-6 py-[8px] flex justify-between items-center h-[64px] rounded-t-3xl text-white bg-white'>
          <button type='button' className='h-full aspect-square rounded-full text-white'>
            <PlusCircleIcon className=' text-black' />
          </button>
          <button className='w-[280px] h-full flex justify-center items-center rounded-full font-bold text-lg bg-teal-400'>立即結帳</button>
        </nav>
      </div>
    </div>
  );
};
