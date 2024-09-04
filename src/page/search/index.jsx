import {AdjustmentsHorizontalIcon, MagnifyingGlassIcon} from '@heroicons/react/24/outline';
import {ArrowLeftIcon} from '@heroicons/react/24/solid';

export const Search = () => {
  return (
    <>
      <header className='mt-14 px-6 w-full h-[50px]'>
        <div className='flex gap-x-4'>
          <button type='button'>
            <ArrowLeftIcon className='size-5' />
          </button>
          <form className='w-[255px] h-full'>
            <label className='flex relative h-[52px] border-2 rounded-full border-black'>
              <span className='flex justify-center items-center absolute left-4 h-full'>
                <MagnifyingGlassIcon className='size-5' />
              </span>
              <input type='text' placeholder='emilys' defaultValue='emilys' className='w-full pl-12 border-2 rounded-full border-transparent bg-transparent' />
            </label>
          </form>
          <button type='button'>
            <AdjustmentsHorizontalIcon className='size-5' />
          </button>
        </div>
        <nav></nav>
      </header>
    </>
  );
};
