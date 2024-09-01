import {EyeIcon, LockClosedIcon, UserIcon} from '@heroicons/react/24/outline';
import {ShoppingBagIcon} from '@heroicons/react/24/solid';
import {getAllProduct, getAutoCompleteList, getProductDetail, getUserCart, getUserProfile, login} from '../../service/login';

export const loader = async () => {
  await login('emilys', 'emilyspass');
  await getUserProfile();
  await getUserCart();
  await getAutoCompleteList();
  await getAllProduct();
  await getProductDetail(15);
  return null;
};

export const LoginForm = () => {
  return (
    <div className='w-full h-dvh bg-teal-950'>
      <div className='flex justify-center gap-3 mt-20'>
        <ShoppingBagIcon className='size-10 text-teal-500' />
        <span className='text-white text-3xl font-bold'>購物車</span>
      </div>
      <div className='mt-16 mx-auto  w-[335px] h-[432px] rounded-3xl bg-white '>
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
          <label className='flex relative h-[52px] border-2 rounded-full border-black'>
            <span className='flex justify-center items-center absolute left-4 h-full'>
              <UserIcon className='size-5' />
            </span>
            <input type='email' placeholder='emilys' defaultValue='emilys' className='w-full pl-12 border-2 rounded-full border-transparent bg-transparent' />
          </label>
          <label className='flex relative mt-4 h-[52px] border-2 rounded-full border-black'>
            <span className='flex justify-center items-center absolute left-4 h-full'>
              <LockClosedIcon className='size-5' />
            </span>
            <input type='email' placeholder='emilyspass' defaultValue='emilyspass' className='w-full pl-12 border-2 rounded-full border-transparent bg-transparent' />
            <span className='flex justify-center items-center absolute right-4 h-full'>
              <EyeIcon className='size-5' />
            </span>
          </label>
          <button className='mt-24 w-full h-[64px] rounded-full  bg-teal-500 text-center text-white text-l font-bold'>送出</button>
        </form>
      </div>
    </div>
  );
};
// underline underline-offset-8 decoration-red-300 decoration-4
// absolute top-4 left-4
