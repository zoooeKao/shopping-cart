import {ArrowLeftIcon, HeartIcon, ShareIcon} from '@heroicons/react/24/outline';
import {PlusCircleIcon} from '@heroicons/react/24/solid';

export const SearchProductDescription = ({}) => {
  return (
    <body className='w-full h-dvh px-6 mt-8 mb-4'>
      <header className='flex justify-between'>
        <div>
          <ArrowLeftIcon className='size-5' />
        </div>
        <div className='flex gap-3'>
          <ShareIcon className='size-5' />
          <HeartIcon className='size-5' />
        </div>
      </header>

      <main>
        {/* TODO: 預留空間 */}
        <img src='https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png' className='mt-[35px]' />
        <div className='text-[22px] leading-7 font-black'>Essence Mascara Lash Princess</div>
        <div className='mt-2 text-green-primary leading-6 font-medium'>$9.99</div>
        <div className='mt-3 text-balance'>The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.</div>
      </main>

      <nav className='mt-10 mb-[30px] px-6 fixed bottom-0 left-0 right-0 flex items-center gap-5 h-[62px] rounded-t-3xl text-white '>
        <button type='button' className='w-1/6 h-full rounded-full text-white'>
          <PlusCircleIcon className='rounded-full border-transparent text-black' />
        </button>
        <button className='w-5/6 h-full flex justify-center items-center rounded-full font-bold text-lg bg-teal-400'>立即結帳</button>
      </nav>
    </body>
  );
};
