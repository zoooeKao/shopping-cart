import {ArrowLeftIcon, HeartIcon, PlusCircleIcon, ShareIcon} from '@heroicons/react/24/outline';

export const Product = ({}) => {
  return (
    <body className='w-full h-dvh px-6'>
      <header className='flex justify-between mt-8'>
        <div>
          <ArrowLeftIcon className='size-5' />
        </div>
        <div className='flex gap-3'>
          <ShareIcon className='size-5' />
          <HeartIcon className='size-5' />
        </div>
      </header>
      <main>
        <img src='https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png'></img>
        <div>Essence Mascara Lash Princess</div>
        <span>9.99</span>
        <div>The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.</div>
      </main>

      <section className='mt-10 h-[62px] w-full' data-desc='empty-space-under-nav' />
      <nav className='fixed bottom-0 left-0 right-0 flex justify-evenly items-center mt-10 h-[62px] w-full rounded-t-3xl text-white bg-slate-400'>
        <button className='flex justify-center items-center size-10 rounded-full bg-teal-400'>
          <PlusCircleIcon className='size-6' />
        </button>
        <button className='flex justify-center items-center w-10 h-10 rounded-full bg-teal-400'></button>
      </nav>
    </body>
  );
};
