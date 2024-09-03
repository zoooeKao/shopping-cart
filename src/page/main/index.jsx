import {Bars3Icon, EnvelopeIcon, HomeIcon, MagnifyingGlassIcon, ShoppingBagIcon, ShoppingCartIcon, UserIcon} from '@heroicons/react/24/outline';
import {ArrowRightIcon, BoltIcon, UserCircleIcon} from '@heroicons/react/24/solid';
import imgBanner from '../../assets/img-banner/banner.png';
import {Categories} from '../../components/categories';
import {CouponItems} from '../../components/coupons';
import {DiscountItems} from '../../components/discount-items';
import {Streams} from '../../components/streams';

export const loader = async () => {
  // await login('emilys', 'emilyspass');
  // await getUserProfile();
  // await getUserCart();
  // await getAutoCompleteList();
  // await getAllProduct();
  // await getProductDetail(1);
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
            <img src={imgBanner} alt='banner' className='block mx-6' />
          </div>
        </section>
      </header>
      <main>
        <div className='flex flex-col gap-10 mt-6 ml-6' data-desc='container'>
          <section className=' h-[188px] '>
            <main className='overflow-x-auto'>
              <Categories />
            </main>
          </section>

          <section className='h-[310px]  bg-slate-600'>
            <title className='flex justify-between items-center mr-6 mb-4'>
              <div className='flex gap-1 items-center'>
                <BoltIcon className='size-5 text-red-primary' />
                <span className='text-lg font-bold'>促銷品</span>
              </div>
              <div className='w-[74px] h-[25px] rounded-md text-white text-center bg-main'>23:59:59</div>
              <div>
                <ArrowRightIcon className='size-5 text-green-primary' />
              </div>
            </title>
            <main className='overflow-x-auto'>
              <div className='h-[278px]'>
                <DiscountItems />
              </div>
            </main>
          </section>

          <section className='h-[140px] overflow-x-auto  bg-white'>
            <title className='flex justify-between items-center mr-6 mb-4'>
              <div className='flex gap-1 items-center'>
                <BoltIcon className='size-5 text-red-primary' />
                <span className='text-lg font-bold'>優惠券</span>
              </div>
              <div>
                <ArrowRightIcon className='size-5 text-green-primary' />
              </div>
            </title>
            <main className='overflow-x-auto'>
              <div className='h-[96px]'>
                <CouponItems />
              </div>
            </main>
          </section>

          <section className='h-[252px] overflow-x-auto'>
            <title className='flex justify-between items-center mr-6 mb-4'>
              <div className='flex gap-1 items-center'>
                <BoltIcon className='size-5 text-red-primary' />
                <span className='text-lg font-bold'>直播間</span>
              </div>
              <div>
                <ArrowRightIcon className='size-5 text-green-primary' />
              </div>
            </title>
            <main className='overflow-x-auto '>
              <Streams />
            </main>
          </section>
        </div>
      </main>

      <nav className='flex justify-center items-center gap-x-12 mt-10 px-6 py-[22px] h-[62px] rounded-t-3xl text-white bg-slate-400'>
        <a href='#' className='flex justify-center items-center w-10 h-10 rounded-full bg-teal-400'>
          <HomeIcon className='size-6' />
        </a>
        <a href='#' className='flex justify-center items-center w-10 h-10 rounded-full bg-teal-400'>
          <MagnifyingGlassIcon className='size-6' />
        </a>
        <a href='#' className='flex justify-center items-center w-10 h-10 rounded-full bg-teal-400'>
          <ShoppingBagIcon className='size-6' />
        </a>
        <a href='#' className='flex justify-center items-center w-10 h-10 rounded-full bg-teal-400'>
          <Bars3Icon className='size-6' />
        </a>
        <a href='#' className='flex justify-center items-center w-10 h-10 rounded-full bg-teal-400'>
          <UserIcon className='size-6' />
        </a>
      </nav>
    </body>
  );
};
