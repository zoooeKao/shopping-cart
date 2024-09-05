import {AdjustmentsHorizontalIcon, MagnifyingGlassIcon} from '@heroicons/react/24/outline';
import {ArrowLeftIcon} from '@heroicons/react/24/solid';
import {SearchCards} from '../../components/search-card/searchCards';
import {SearchCarouselGroup} from '../../components/search-carousel/searchCarouselGroup';

export const Search = () => {
  return (
    <body className='w-full h-dvh px-6'>
      <header className='fixed top-0 left-0 z-1000'>
        <div className='flex gap-x-4 mt-4'>
          <button type='button' className='flex justify-center items-center'>
            <ArrowLeftIcon className='size-5' />
          </button>
          <form className='h-full'>
            <label className='flex relative h-[52px] border-2 rounded-2xl  border-zinc-300'>
              <span className='flex justify-center items-center absolute left-4 h-full'>
                <MagnifyingGlassIcon className='size-5' />
              </span>
              <input type='text' placeholder='emilys' defaultValue='emilys' className='w-full h-full pl-12 rounded-2xl  border-zinc-300 ' />
            </label>
          </form>
          <button type='button' className='flex justify-center items-center'>
            <AdjustmentsHorizontalIcon className='size-5' />
          </button>
        </div>
        <nav className='mt-2'>
          <main className='overflow-x-auto'>
            <SearchCarouselGroup />
          </main>
        </nav>
      </header>
      <div className='fixed h-[116px] bg-yellow-200 z-10' />
      <main className='mt-6'>
        <SearchCards />
      </main>
    </body>
  );
};
// fixed top-0 left-0
