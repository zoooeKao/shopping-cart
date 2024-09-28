import {ArrowRightIcon, EnvelopeIcon, ShoppingCartIcon} from '@heroicons/react/24/outline';
import {BoltIcon, TicketIcon, UserCircleIcon, VideoCameraIcon} from '@heroicons/react/24/solid';
import {useLoaderData} from 'react-router-dom';
import {AutoCompleteList} from '../../components/auto-complete-list';
import {CouponItems} from '../../components/coupons';
import {Navbar} from '../../components/nav';
import {PromotionalList} from '../../components/promotion-list';
import {Streams} from '../../components/stream-list';
import {getAllProduct, getAutoCompleteList, getProductDetail, login} from '../../service/service';

export const homePageLoader = async () => {
  console.log('from main');
  await login('emilys', 'emilyspass');
  // await login('carterb', 'carterbpass');
  // await getUserProfile();
  // await getUserCart();
  const autoCompleteList = await getAutoCompleteList();
  const allProduct = await getAllProduct();
  const productDetail = await getProductDetail(13);
  // await getSearchProduct('minPrice', 1);
  return {autoCompleteList, allProduct, productDetail};
  // return {autoCompleteList: getAutoCompleteList(), allProduct: getAllProduct()};
  // return getAutoCompleteList();
};

/**
 * @type {React.FC}
 */
export const HomePage = () => {
  /** @type {{autoCompleteList: import('../../env').AutoCompleteList; allProduct: import('../../env').AllProduct}} */
  const {
    autoCompleteList: {brand, category},
    allProduct: {products, total},
  } = useLoaderData();
  // console.log('brand', brand, 'category', category, 'products', products, 'total', total);

  return (
    <>
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
            {/* Code review: 為什麼需要用成變數的方式來匯入? 資料夾assets只能用來匯入檔案，資料夾public沒有此限制 */}
            <img src='img-banner/banner.png' alt='banner' className='block w-full h-full' />
          </div>
        </section>
      </header>
      <main>
        <div className='flex flex-col gap-10 mt-6 ml-6'>
          <section className='h-[188px]' data-desc='brand-list'>
            <div className='overflow-x-auto'>
              <AutoCompleteList requestQuery='brand' layout='grid-rows-2' flow='grid-flow-col' />
            </div>
          </section>

          <section className='h-[310px]' data-desc='promotional-list'>
            <div className='flex justify-between items-center mr-6 mb-4'>
              <div className='flex gap-1 items-center'>
                <BoltIcon className='size-5 text-purple-primary' />
                <span className='text-lg font-bold'>促銷品</span>
              </div>
              <div className='w-[74px] h-[25px] rounded-md text-white text-center bg-main'>23:59:59</div>
              <button type='button'>
                <ArrowRightIcon className='size-5 text-green-primary' />
              </button>
            </div>
            <div className='overflow-x-auto'>
              <div className='h-[278px]'>
                <PromotionalList />
              </div>
            </div>
          </section>

          <section className='h-[140px]' data-desc='coupon-list'>
            <div className='flex justify-between items-center mr-6 mb-4'>
              <div className='flex gap-1 items-center'>
                <TicketIcon className='size-5 text-purple-primary' />
                <span className='text-lg font-bold'>優惠券</span>
              </div>
              <button type='button'>
                <ArrowRightIcon className='size-5 text-green-primary' />
              </button>
            </div>
            <div className='overflow-x-auto'>
              <div className='h-[96px]'>
                <CouponItems />
              </div>
            </div>
          </section>

          <section className='h-[252px]' data-desc='stream-list'>
            <title className='flex justify-between items-center mr-6 mb-4'>
              <div className='flex gap-1 items-center'>
                <VideoCameraIcon className='size-5 text-purple-primary' />
                <span className='text-lg font-bold'>直播間</span>
              </div>
              <button type='button'>
                <ArrowRightIcon className='size-5 text-green-primary' />
              </button>
            </title>
            <div className='overflow-x-auto '>
              <Streams />
            </div>
          </section>
        </div>
      </main>
      <Navbar />
    </>
  );
};
