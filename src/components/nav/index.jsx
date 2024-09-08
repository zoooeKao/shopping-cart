import {Bars3Icon, HomeIcon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon} from '@heroicons/react/24/outline';

export const Navbar = () => {
  return (
    <>
      <section className='mt-10 h-[62px] w-full' data-desc='empty-space-under-nav' />
      <nav className='fixed bottom-0 left-0 right-0 flex justify-evenly items-center mt-10 h-[62px] w-full rounded-t-3xl text-white bg-slate-400'>
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
    </>
  );
};
