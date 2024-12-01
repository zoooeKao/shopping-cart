import {Bars3Icon, HomeIcon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon} from '@heroicons/react/24/outline';
import {NavLink} from 'react-router-dom';
import {MaxWidth} from '../wrapper/outside-wrapper';

/** @type {React.FC} */
export const Navbar = () => {
  return (
    <MaxWidth>
      {/* TODO: 陰影怎麼用 */}
      <section
        className='h-[62px] w-full mt-6 bg-white'
        data-desc='empty-space-under-nav'
      />
      <nav className='mx-auto max-w-[375px] px-6 fixed bottom-0 left-0 right-0 flex justify-between items-center h-[62px] rounded-t-3xl border-t border-gray-200 text-black bg-white'>
        <button>
          <NavLink
            to='/'
            className={({isActive}) => `flex justify-center items-center size-10 rounded-full ${isActive ? 'bg-teal-400 text-white' : 'bg-white'}`}>
            <HomeIcon className='size-6' />
          </NavLink>
        </button>
        <button>
          <NavLink
            to='/search'
            className={({isActive}) => `flex justify-center items-center size-10 rounded-full ${isActive ? 'bg-teal-400 text-white' : 'bg-white'}`}>
            <MagnifyingGlassIcon className='size-6' />
          </NavLink>
        </button>
        <button>
          <NavLink
            to='/cart'
            className={({isActive}) => `flex justify-center items-center size-10 rounded-full ${isActive ? 'bg-teal-400 text-white' : 'bg-white'}`}>
            <ShoppingBagIcon className='size-6' />
          </NavLink>
        </button>
        <button>
          <NavLink
            to='/order'
            className={({isActive}) => `flex justify-center items-center size-10 rounded-full ${isActive ? 'bg-teal-400 text-white' : 'bg-white'}`}>
            <Bars3Icon className='size-6' />
          </NavLink>
        </button>
        <button>
          <NavLink
            to='/account'
            className={({isActive}) => `flex justify-center items-center size-10 rounded-full ${isActive ? 'bg-teal-400 text-white' : 'bg-white'}`}>
            <UserIcon className='size-6' />
          </NavLink>
        </button>
      </nav>
    </MaxWidth>
  );
};
