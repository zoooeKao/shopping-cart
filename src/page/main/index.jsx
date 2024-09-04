import {Bars3Icon, EnvelopeIcon, HomeIcon, MagnifyingGlassIcon, ShoppingBagIcon, ShoppingCartIcon, UserIcon} from '@heroicons/react/24/outline';
import {ArrowRightIcon, BoltIcon, UserCircleIcon, VideoCameraIcon, TicketIcon} from '@heroicons/react/24/solid';
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
          <div className='px-6 w-full h-[207px] rounded-b-2xl bg-main '>
            <img src={imgBanner} alt='banner' className='block w-full h-full' />
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

          <section className='h-[310px]'>
            <title className='flex justify-between items-center mr-6 mb-4'>
              <div className='flex gap-1 items-center'>
                <BoltIcon className='size-5 text-purple-primary' />
                <span className='text-lg font-bold'>促銷品</span>
              </div>
              <div className='w-[74px] h-[25px] rounded-md text-white text-center bg-main'>23:59:59</div>
              <button type='button'>
                <ArrowRightIcon className='size-5 text-green-primary' />
              </button>
            </title>
            <main className='overflow-x-auto'>
              <div className='h-[278px]'>
                <DiscountItems />
              </div>
            </main>
          </section>

          <section className='h-[140px] overflow-x-auto bg-white'>
            <title className='flex justify-between items-center mr-6 mb-4'>
              <div className='flex gap-1 items-center'>
                <TicketIcon className='size-5 text-purple-primary' />
                <span className='text-lg font-bold'>優惠券</span>
              </div>
              <button type='button'>
                <ArrowRightIcon className='size-5 text-green-primary' />
              </button>
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
                <VideoCameraIcon className='size-5 text-purple-primary' />
                <span className='text-lg font-bold'>直播間</span>
              </div>
              <button type='button'>
                <ArrowRightIcon className='size-5 text-green-primary' />
              </button>
            </title>
            <main className='overflow-x-auto '>
              <Streams />
            </main>
          </section>

          <section className='h-[62px] w-full' />
        </div>
      </main>

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
