import {HeartIcon} from '@heroicons/react/24/outline';
import {PlusCircleIcon} from '@heroicons/react/24/solid';

export const SearchCard = ({title, discountPercentage, price, thumbnail}) => {
  return (
    <div className='shrink-0 relative pt-3 px-3 w-[154px] h-[228px] rounded-2xl bg-white'>
      <title className='flex justify-between'>
        <span className='flex justify-center items-center w-[35px] h-[20px] rounded-md font-semibold text-xs text-white bg-red-primary'>{discountPercentage}</span>
        <button type='button'>
          <HeartIcon className='size-5' />
        </button>
      </title>
      <img src={thumbnail} className='w-full h-[90px]' />
      <div className='text-center mt-4'>{title}</div>
      <div className='flex justify-evenly mt-1'>
        <div className='text-sm font-medium'>{price}</div>
        <div className='text-sm font-medium line-through text-zinc-400'>{price}</div>
      </div>
      <button type='button' className='absolute left-[50%] bottom-0 -translate-x-1/2 translate-y-1/2 rounded-full'>
        <PlusCircleIcon className='size-12 text-green-primary' />
      </button>
    </div>
  );
};
