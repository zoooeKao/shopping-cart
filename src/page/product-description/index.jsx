import {ArrowLeftIcon, HeartIcon, ShareIcon} from '@heroicons/react/24/outline';
import {PlusCircleIcon} from '@heroicons/react/24/solid';
import {useLocation, useNavigate} from 'react-router-dom';

export const ProductDescription = ({}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const {title, discountPrice, description, thumbnail} = location.state;

  return (
    <div className='absolute px-6 pt-4 pb-[80px]'>
      <div className=''>
        <header className='fixed left-6 right-6 top-0 pt-3 flex justify-between bg-white'>
          <button className='flex justify-center items-center size-8' onClick={() => navigate(-1)}>
            <ArrowLeftIcon className='size-5' />
          </button>
          <div className='flex gap-3'>
            <button className='flex justify-center items-center size-8'>
              <ShareIcon className='size-5' />
            </button>{' '}
            <button className='flex justify-center items-center size-8'>
              <HeartIcon className='size-5' />
            </button>
          </div>
        </header>

        <main>
          {/* TODO: 預留空間 */}
          <img src={thumbnail} className='mt-[35px]' />
          <div className='text-[20px] leading-6 font-black'>{title}</div>
          <div className='mt-2 text-green-primary leading-6 font-medium'>{`$${discountPrice}`}</div>
          <div className='mt-3 text-justify'>{description}</div>
        </main>

        <nav className='fixed bottom-0 left-0 right-0 px-6 py-[8px] flex justify-between items-center h-[64px] rounded-t-3xl text-white bg-white'>
          <button type='button' className='h-full aspect-square rounded-full text-white'>
            <PlusCircleIcon className=' text-black' />
          </button>
          <button className='w-[280px] h-full flex justify-center items-center rounded-full font-bold text-lg bg-teal-400'>立即結帳</button>
        </nav>
      </div>
    </div>
  );
};
