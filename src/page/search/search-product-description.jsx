import {ArrowLeftIcon, HeartIcon, ShareIcon} from '@heroicons/react/24/outline';
import {PlusCircleIcon} from '@heroicons/react/24/solid';

export const SearchProductDescription = ({}) => {
  return (
    <body className='w-full h-dvh px-6 pt-8'>
      <div className=''>
        <header className='flex justify-between'>
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
          <div className='text-[22px] leading-7 font-black'>Essence Mascara Lash Princess</div>
          <div className='mt-2 text-green-primary leading-6 font-medium'>$9.99</div>
          <div className='mt-3 text-balance'>The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.</div>
        </main>

        {/* Question: 為什麼會出現Ｙ卷軸 */}
        <nav className='absolute bottom-0 left-0 right-0 px-6 flex justify-between items-center h-[62px] rounded-t-3xl text-white'>
          <button type='button' className='h-full aspect-square rounded-full text-white'>
            <PlusCircleIcon className=' text-black' />
          </button>
          <button className='w-[280px] h-full flex justify-center items-center rounded-full font-bold text-lg bg-teal-400'>立即結帳</button>
        </nav>
      </div>
    </body>
  );
};
