import {MinusCircleIcon, PlusCircleIcon} from '@heroicons/react/24/outline';

export const CartItem = ({img}) => {
  return (
    <div className='flex justify-between items-center p-4 rounded-s-3xl shadow-lg'>
      <div className='flex items-center gap-[12px]'>
        <img src={img} className='size-[60px]' />
        <div className='flex items-center gap-2'>
          <button>
            <MinusCircleIcon className='size-6' />
          </button>
          <span>2</span>
          <button>
            <PlusCircleIcon className='size-6' />
          </button>
        </div>
      </div>
      <div>$44</div>
    </div>
  );
};
