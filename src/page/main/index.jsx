import {EnvelopeIcon, ShoppingCartIcon} from '@heroicons/react/24/outline';
import {ArrowRightIcon, BoltIcon, TicketIcon, UserCircleIcon, VideoCameraIcon} from '@heroicons/react/24/solid';
import imgBanner from '../../assets/img-banner/banner.png';
import {Categories} from '../../components/categories';
import {CouponItems} from '../../components/coupons';
import {DiscountItems} from '../../components/discount-items';
import {Navbar} from '../../components/nav';
import {Streams} from '../../components/streams';
import {getAllProduct, getAutoCompleteList, getProductDetail, getSearchProduct, getUserCart, getUserProfile, login} from '../../service/login';

export const loader = async () => {
  console.log('from main');
  // await login('emilys', 'emilyspass');
  await login('carterb', 'carterbpass');
  await getUserProfile();
  await getUserCart();
  await getAutoCompleteList();
  await getAllProduct();
  await getProductDetail(1);
  await getSearchProduct('beauty');
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
            {/* Question: 為什麼需要用成變數的方式來匯入 */}
            <img src={imgBanner} alt='banner' className='block w-full h-full' />
          </div>
        </section>
      </header>
      <main>
        <div className='flex flex-col gap-10 mt-6 ml-6'>
          <section className='h-[188px] '>
            <main className='overflow-x-auto'>
              <Categories layout='grid-rows-2' flow='grid-flow-col' />
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

          <section className='h-[140px]'>
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

          <section className='h-[252px]'>
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
        </div>
      </main>
      <Navbar />
    </body>
  );
};
