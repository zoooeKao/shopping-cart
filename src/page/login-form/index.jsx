import {EyeIcon, LockClosedIcon, UserIcon} from '@heroicons/react/24/outline';
import {ShoppingBagIcon} from '@heroicons/react/24/solid';
import {Wrapper} from '../../components/outside-wrapper';

export const loader = async () => {
  // console.log('from login-form');
  // await login('emilys', 'emilyspass');
  // await getUserProfile();
  // await getUserCart();
  // await getAutoCompleteList();
  // await getAllProduct();
  // await getProductDetail(1);
  // await getSearchProduct('groceries');
  // return null;
};

export const LoginForm = () => {
  return (
    <Wrapper bgColor='bg-teal-950'>
      <div className='h-full flex flex-col justify-center '>
        <div className='flex justify-center gap-3'>
          <ShoppingBagIcon className='size-10 text-teal-500' />
          <span className='text-white text-3xl font-bold'>購物車</span>
        </div>
        <div className='mt-16 mx-auto w-[335px] h-[432px] rounded-3xl bg-white '>
          <div className='flex justify-center gap-10 mx-auto pt-8 font-bold text-xl'>
            <div className=' border-b-8 border-red-300'>
              <button type='button' className='px-4'>
                登入
              </button>
            </div>
            <div className=' border-b-8 border-red-300'>
              <button type='button' className='px-4'>
                註冊
              </button>
            </div>
          </div>
          <form className='mt-14 px-5'>
            <label className='flex relative h-[52px]'>
              <span className='flex justify-center items-center absolute left-4 h-full'>
                <UserIcon className='size-5' />
              </span>
              <input type='email' placeholder='email' defaultValue='emilys' className='w-full pl-12 border-2 rounded-full border-black' />
            </label>
            <label className='flex relative mt-4 h-[52px]'>
              <span className='flex justify-center items-center absolute left-4 h-full'>
                <LockClosedIcon className='size-5' />
              </span>
              <input type='password' placeholder='password' defaultValue='emilyspass' className='w-full pl-12 border-2 rounded-full border-black' />
              <button className='flex justify-center items-center absolute right-4 h-full'>
                <EyeIcon className='size-5' />
              </button>
            </label>
            <button type='submit' className='mt-24 w-full h-[64px] rounded-full  bg-teal-500 text-center text-white text-l font-bold'>
              送出
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
