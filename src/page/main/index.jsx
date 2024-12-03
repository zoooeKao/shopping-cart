import {ArrowRightIcon, EnvelopeIcon, ShoppingCartIcon} from '@heroicons/react/24/outline';
import {BoltIcon, TicketIcon, UserCircleIcon, VideoCameraIcon} from '@heroicons/react/24/solid';
import {useAtom} from 'jotai';
import {Link, useLoaderData} from 'react-router-dom';
import {AutoCompleteList} from '../../components/auto-complete-list';
import {CouponItems} from '../../components/coupons';
import {Navbar} from '../../components/nav';
import {ProductCardList} from '../../components/product-card-list';
import {Streams} from '../../components/stream-list';
import {MaxWidth} from '../../components/wrapper/outside-wrapper';
import {loggedIn} from '../../model/jotai/atom';
import {getAllProduct, getAutoCompleteList, getUserProfile} from '../../service/service';
import {styles} from '../../style';

/** @typedef {Exclude<Awaited<ReturnType<typeof homePageLoader>>, Response>} ReturnHomePageLoader */

export const homePageLoader = () => {
  return Promise.all([getAutoCompleteList(), getAllProduct(), getUserProfile()]).then(([autoCompleteList, allProduct, userProfile]) => {
    return {
      autoCompleteList,
      allProduct,
      userProfile,
    };
  });
};

/**
 * @type {React.FC}
 */
export const HomePage = () => {
  const {
    allProduct: {products},
    userProfile,
  } = /** @type {ReturnHomePageLoader} */ (useLoaderData());
  const [isLoggedIn, setIsLoggedIn] = useAtom(loggedIn);

  return (
    <MaxWidth>
      <header className='w-full'>
        <section className='flex justify-between items-center w-full px-6 py-4 bg-main text-white'>
          <div className='flex gap-3 items-center '>
            {isLoggedIn && userProfile.profileData ? (
              <>
                <button>
                  <Link to='/account'>
                    <img
                      src='/img-info/avatar.png'
                      alt='圖片'
                      className='size-[32px] mr-2'
                    />
                    <span>{userProfile.profileData.firstName}</span>
                  </Link>
                </button>
              </>
            ) : (
              <>
                <UserCircleIcon className='size-8' />
              </>
            )}
          </div>
          <nav className='flex gap-3'>
            <EnvelopeIcon className='size-5' />
            <ShoppingCartIcon className='size-5' />
          </nav>
        </section>
        {/* Code review: 為什麼需要用成變數的方式來匯入? 資料夾assets只能用來匯入檔案，資料夾public沒有此限制 */}
        <img
          src='img-banner/banner.png'
          className='w-full block bg-main rounded-b-2xl'
        />
      </header>
      <main className='w-full'>
        <div className='flex flex-col gap-10 w-full mt-6 pl-6'>
          <section
            className='h-[188px]'
            data-desc='brand-list'>
            <div className='overflow-x-auto'>
              <AutoCompleteList
                requestQuery='brand'
                layout='grid-rows-2'
                flow='grid-flow-col'
                data-desc='brand'
              />
            </div>
          </section>

          <section
            className='h-[310px]'
            data-desc='promotional-list'>
            <div className='flex justify-between items-center mr-6 mb-4'>
              <div className='flex gap-1 items-center'>
                <BoltIcon className='size-5 text-purple-primary' />
                <span className='text-lg font-bold'>促銷品</span>
              </div>
              <div className='h-[25px] px-1 rounded-md text-white text-center bg-main'>{new Date().toString().split(' ').slice(0, 3).join(',')}</div>
              <button type='button'>
                <ArrowRightIcon className='size-5 text-green-primary' />
              </button>
            </div>
            <div className='overflow-x-auto'>
              <div className='h-[278px]'>
                <ProductCardList
                  productList={products}
                  style={styles.promotionalList}
                />
              </div>
            </div>
          </section>

          <section
            className='h-[140px]'
            data-desc='coupon-list'>
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

          <section
            className='h-[252px]'
            data-desc='stream-list'>
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
    </MaxWidth>
  );
};
