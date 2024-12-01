import {LockClosedIcon, UserIcon} from '@heroicons/react/24/outline';
import {ShoppingBagIcon} from '@heroicons/react/24/solid';
import {useAtom} from 'jotai';
import {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {PopupAddItem} from '../../components/popup-add-item';
import {Wrapper} from '../../components/wrapper/outside-wrapper';
import {loggedIn} from '../../model/jotai/atom';
import {login} from '../../service/service';

/**
 * @type {React.FC}
 */
export const LoginForm = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useAtom(loggedIn);

  const [userInfo, setUserInfo] = useState({username: 'emilys', password: 'emilyspass'});
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasError, setHasError] = useState(false);

  /**
   * @param {React.FormEvent<HTMLFormElement>} event
   * @param {{username: string, password: string }} userInfo
   * @returns {void}
   */
  const submitForm = (event, userInfo) => {
    event.preventDefault();

    login(userInfo.username, userInfo.password).then((result) => {
      if (result.isLoggedIn) {
        setIsLoggedIn(true);
        return navigate(`${location.state.from.pathname}`);
      }
      return setHasError(true);
    });
  };

  /** @type {()=>void} */
  const handleConfirm = () => {
    setUserInfo({username: 'emilys', password: 'emilyspass'});
    setHasError(false);
  };

  /** @type {()=>void} */
  const handleCancel = () => {
    setHasError(false);
  };

  return (
    <Wrapper bgColor='bg-teal-950'>
      {/* Code review: 需做決策 modal/dialog ; 不需做決策 alert，如：帳號密碼輸入錯誤 */}
      <div className='h-full flex flex-col justify-center '>
        <div className='flex justify-center gap-3'>
          <ShoppingBagIcon className='size-10 text-teal-500' />
          <span className='text-white text-3xl font-bold'>購物車</span>
        </div>
        <div className='mt-16 mx-auto w-[335px] h-[432px] rounded-3xl bg-white '>
          <div className='flex justify-center gap-10 mx-auto pt-8 font-bold text-xl'>
            <div className=' border-b-8 border-red-300'>
              <button
                type='button'
                className='px-4'>
                登入
              </button>
            </div>
            <div className=' border-b-8 border-red-300'>
              <button
                type='button'
                className='px-4'>
                註冊
              </button>
            </div>
          </div>
          <form
            onSubmit={(event) => submitForm(event, userInfo)}
            className='mt-14 px-5'>
            <label className='flex relative h-[52px]'>
              <span className='flex justify-center items-center absolute left-4 h-full'>
                <UserIcon className='size-5' />
              </span>
              <input
                type='text'
                value={userInfo.username}
                onChange={(event) => setUserInfo((prev) => ({...prev, username: event.target.value}))}
                placeholder='username'
                required
                className='w-full pl-12 border-2 rounded-full border-black'
              />
            </label>
            <label className='flex relative mt-4 h-[52px]'>
              <span className='flex justify-center items-center absolute left-4 h-full'>
                <LockClosedIcon className='size-5' />
              </span>
              <input
                type='text'
                value={userInfo.password}
                onChange={(event) => setUserInfo((prev) => ({...prev, password: event.target.value}))}
                placeholder='password'
                required
                className='w-full pl-12 border-2 rounded-full border-black'
              />
            </label>

            {hasError && (
              <PopupAddItem
                message='您的帳號密碼錯誤，請重新輸入'
                onConfirm={handleConfirm}
              />
            )}
            <button
              type='submit'
              className='mt-24 w-full h-16 rounded-full  bg-teal-500 text-center text-white text-l font-bold'>
              {isSubmitting ? '送出中...' : '送出'}
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
