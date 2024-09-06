import {Bars3Icon, CameraIcon, HomeIcon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon, XMarkIcon} from '@heroicons/react/24/outline';

export const SearchIndexPage = () => {
  return (
    <body className='relative w-full h-dvh px-6'>
      <header className=' left-0 right-0 top-0 bg-white'>
        <form className='mt-14 px-5'>
          <label className='flex relative mt-4 h-[52px] border-2 rounded-2xl  border-zinc-300 '>
            <span className='flex justify-center items-center absolute left-4 h-full'>
              <MagnifyingGlassIcon className='size-5' />
            </span>
            <input type='email' placeholder='emilyspass' defaultValue='emilyspass' className='w-full pl-12 border-2 rounded-full border-transparent bg-transparent' />
            <span className='flex justify-center items-center absolute right-4 h-full'>
              <CameraIcon className='size-5' />
            </span>
          </label>
        </form>
      </header>

      <div className='flex flex-col px-6'>
        <div className='font-black h-8'>最近搜尋</div>
        <div className='flex justify-between'>
          <span>富士相機</span>
          <button type='button'>
            <XMarkIcon className='size-5' />
          </button>
        </div>
        <div className='flex justify-between'>
          <span>富士相機</span>
          <button type='button'>
            <XMarkIcon className='size-5' />
          </button>
        </div>
      </div>

      <div className='flex flex-col px-6'>
        <div className='font-black h-8'>趨勢搜尋</div>
      </div>

      <nav className='fixed bottom-0 left-0 flex justify-center items-center gap-6 mt-10 px-6 py-[22px] h-[62px] w-full rounded-t-3xl text-white bg-slate-400'>
        <button className='flex justify-center items-center size-10 rounded-full bg-teal-400'>
          <HomeIcon className='size-6' />
        </button>
        <button className='flex justify-center items-center w-10 h-10 rounded-full bg-teal-400'>
          <MagnifyingGlassIcon className='size-6' />
        </button>
        <button className='flex justify-center items-center w-10 h-10 rounded-full bg-teal-400'>
          <ShoppingBagIcon className='size-6' />
        </button>
        <button className='flex justify-center items-center w-10 h-10 rounded-full bg-teal-400'>
          <Bars3Icon className='size-6' />
        </button>
        <button className='flex justify-center items-center w-10 h-10 rounded-full bg-teal-400'>
          <UserIcon className='size-6' />
        </button>
      </nav>
    </body>
  );
};
