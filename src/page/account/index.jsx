import {EnvelopeIcon, HomeIcon, PhoneIcon, UserIcon} from '@heroicons/react/24/outline';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Navigate, useLocation, useNavigate, useRouteLoaderData} from 'react-router-dom';
import {Navbar} from '../../components/nav';
import {MaxWidth} from '../../components/wrapper/outside-wrapper';
import {authLogout} from '../../feature/cart/cartSlice';
import {getUserProfile, logout} from '../../service/service';

/** @typedef {Exclude<Awaited<ReturnType<typeof accountLoader>>, Response>} ReturnAccountLoader */

export const accountLoader = () => {
  return getUserProfile().then((productPayload) => {
    return productPayload;
  });
};

export const Account = () => {
  const {profileData} = useRouteLoaderData('app');
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  // const [isLoggedIn, setIsLoggedIn] = useAtom(loggedIn);

  const [redirectToMainPage, setRedirectToMainPage] = useState(false);

  useEffect(() => {
    if (redirectToMainPage) {
      dispatch(authLogout());
      // setIsLoggedIn(false);
      navigate('/');
    }
  }, [redirectToMainPage]);

  if (!redirectToMainPage && !authState) {
    return (
      <Navigate
        to='/login'
        replace
        state={{from: location}}
      />
    );
  }

  return (
    <MaxWidth>
      <div className='absolute px-6 pt-4 mx-auto max-w-[375px]'>
        <header className='mx-auto max-w-[375px] sticky flex justify-center items-center pb-[46px] bg-white '>
          <div className='flex gap-3 text-lg font-semibold'>個人資料</div>
        </header>
        <div className='relative'>
          <img
            src='/img-info/banner.png'
            alt='圖片'
            className='mx-auto max-w-[375px]'
          />
          <img
            src='/img-info/avatar-with-camera.png'
            alt='圖片'
            className='absolute left-[50%] bottom-0 -translate-x-[50%] translate-y-[50%] size-[106px] rounded-e-xl border-black'
          />
        </div>
        <div className='text-xl text-center font-bold mt-16'>{profileData?.username}</div>
        <div
          className='mb-5'
          data-desc='使用者資訊'>
          <div className='flex items-start gap-4 mt-6'>
            <div>
              <UserIcon className='size-5' />
            </div>
            <div className='flex flex-col gap-[6px] text-sm	'>
              <div className='text-slate-400'>姓名</div>
              <div>{profileData?.username}</div>
            </div>
          </div>
          <div className='flex items-start gap-4 mt-6'>
            <div>
              <EnvelopeIcon className='size-5' />
            </div>
            <div className='flex flex-col gap-[6px] text-sm	'>
              <div className='text-slate-400'>電子郵件</div>
              <div>{profileData?.email}</div>
            </div>
          </div>
          <div className='flex items-start gap-4 mt-6'>
            <div>
              <PhoneIcon className='size-5' />
            </div>
            <div className='flex flex-col gap-[6px] text-sm	'>
              <div className='text-slate-400'>電話號碼</div>
              <div>{profileData?.phone}</div>
            </div>
          </div>
          <div className='flex items-start gap-4 mt-6'>
            <div>
              <HomeIcon className='size-5' />
            </div>
            <div className='flex flex-col gap-[6px] text-sm	'>
              <div className='text-slate-400'>地址</div>
              <div>{`${profileData?.address.address} ${profileData?.address.city}, ${profileData?.address.stateCode} ${profileData?.address.postalCode} ${profileData?.address.country} `}</div>
            </div>
          </div>
        </div>
        <button
          onClick={() =>
            logout().then((result) => {
              if (result.isLoggedOut) {
                setRedirectToMainPage(true);
              }
            })
          }
          className='flex justify-center w-full text-red-600 font-semibold'>
          登出
        </button>
        <Navbar />
      </div>
    </MaxWidth>
  );
};
