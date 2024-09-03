import {HeartIcon} from '@heroicons/react/24/outline';
import {PlusCircleIcon} from '@heroicons/react/24/solid';

export const DiscountItem = ({title, discountPercentage, price, thumbnail}) => {
  return (
    <>
      <div className='shrink-0 relative pt-3 px-3 w-[154px] h-[238px] rounded-2xl bg-white shadow-2xl'>
        <div className='flex justify-between'>
          <span className='flex justify-center items-center w-[35px] h-[20px] rounded-md bg-red-primary  text-xs text-white font-semibold'>{discountPercentage}</span>
          <button type='button'>
            <HeartIcon className='size-5' />
          </button>
        </div>
        <img src={thumbnail} className='w-full h-[90px]' />
        <div className='text-center mt-4'>{title}</div>
        <div className='flex justify-evenly mt-1'>
          <div className=' text-sm font-medium '>{price}</div>
          <div className='text-sm line-through font-medium text-zinc-400'>{price}</div>
        </div>
        <button type='button' className='absolute left-[50%] bottom-0 translate-x-[-50%]  translate-y-1/2 rounded-full z-10'>
          <PlusCircleIcon className='size-12 text-green-primary  z-10' />
        </button>
      </div>
    </>
  );
};