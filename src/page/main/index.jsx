import {Bars3Icon, EnvelopeIcon, HomeIcon, MagnifyingGlassIcon, ShoppingBagIcon, ShoppingCartIcon, UserIcon} from '@heroicons/react/24/outline';
import {UserCircleIcon} from '@heroicons/react/24/solid';
import banner from '../../assets/img-banner/banner.png';
import {Categories} from '../../components/categories';

export const loader = async () => {
  // await login('emilys', 'emilyspass');
  // await getUserProfile();
  // await getUserCart();
  // await getAutoCompleteList();
  // await getAllProduct();
  // await getProductDetail(15);
  return null;
};

export const Main = () => {
  return (
    <body className='w-full h-dvh'>
      <header>
        <section className='flex justify-between items-center px-6 py-4 bg-main text-white'>
          <div className='flex gap-3 items-center '>
            <UserCircleIcon className='size-8' />
            <span>Zoe</span>
          </div>
          <nav className='flex gap-3'>
            <a href='#advocate' className='header-nav__link'>
              <EnvelopeIcon className='size-5' />
            </a>
            <a href='#latest-event' className='header-nav__link'>
              <ShoppingCartIcon className='size-5' />
            </a>
          </nav>
        </section>
        <section>
          <div className=' w-full h-[207px] rounded-b-2xl bg-main '>
            <img src={banner} alt='banner' className='block mx-6' />
          </div>
        </section>
      </header>
      <main>
        <div className='flex flex-col gap-10 mt-6 ml-6' data-desc='container'>
          <section className='w-full h-[188px] overflow-x-auto'>
            <Categories />
          </section>
          <section className='w-full h-[275px] overflow-x-auto bg-slate-600'>折扣品</section>
          <section className='w-full h-[140px] overflow-x-auto bg-slate-600'>優惠券</section>
          <section className='w-full h-[252px] overflow-x-auto bg-slate-600'>直播間</section>
        </div>
      </main>
      <nav className='flex justify-center items-center gap-x-12 mx-6 mt-7 h-14 text-white bg-slate-400'>
        <a href='#' className='flex justify-center items-center w-10 h-10 rounded-full bg-teal-400'>
          <HomeIcon className='size-6' />
        </a>
        <div className='flex justify-center items-center w-10 h-10 rounded-full bg-teal-400'>
          <MagnifyingGlassIcon className='size-6' />
        </div>
        <div className='flex justify-center items-center w-10 h-10 rounded-full bg-teal-400'>
          <ShoppingBagIcon className='size-6' />
        </div>
        <div className='flex justify-center items-center w-10 h-10 rounded-full bg-teal-400'>
          <Bars3Icon className='size-6' />
        </div>
        <div className='flex justify-center items-center w-10 h-10 rounded-full bg-teal-400'>
          <UserIcon className='size-6' />
        </div>
      </nav>
    </body>
  );
};
