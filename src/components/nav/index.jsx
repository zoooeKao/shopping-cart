import {Bars3Icon, HomeIcon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon} from '@heroicons/react/24/outline';
import {Link} from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      {/* Question: 陰影怎麼用 */}
      <section className='mt-10 h-[62px] w-full' data-desc='empty-space-under-nav' />
      <nav className='px-6 fixed bottom-0 left-0 right-0 flex justify-between items-center mt-10 h-[62px] rounded-t-3xl text-black bg-white'>
        <Link to='/'>
          <button className='flex justify-center items-center size-10 rounded-full focus:bg-teal-400 focus:text-white'>
            <HomeIcon className='size-6' />
          </button>
        </Link>
        <Link to='/search'>
          <button className='flex justify-center items-center w-10 h-10 rounded-full focus:bg-teal-400 focus:text-white'>
            <MagnifyingGlassIcon className='size-6' />
          </button>
        </Link>
        <Link to='/cart'>
          <button className='flex justify-center items-center w-10 h-10 rounded-full focus:bg-teal-400 focus:text-white'>
            <ShoppingBagIcon className='size-6' />
          </button>
        </Link>
        <button className='flex justify-center items-center w-10 h-10 rounded-full focus:bg-teal-400 focus:text-white'>
          <Bars3Icon className='size-6' />
        </button>
        <button className='flex justify-center items-center w-10 h-10 rounded-full focus:bg-teal-400 focus:text-white'>
          <UserIcon className='size-6' />
        </button>
      </nav>
    </>
  );
};
