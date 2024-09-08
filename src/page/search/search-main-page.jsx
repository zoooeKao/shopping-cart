import {AdjustmentsHorizontalIcon, MagnifyingGlassIcon} from '@heroicons/react/24/outline';
import {ArrowLeftIcon} from '@heroicons/react/24/solid';
import {SearchCards} from '../../components/search-card/searchCards';
import {SearchCarouselGroup} from '../../components/search-carousel/searchCarouselGroup';

export const SearchMainPage = () => {
  return (
    // Question: 為甚麼header的z-index設2不行
    // Question: 為什麼header需要單獨設px
    <body className='relative w-full h-dvh px-6'>
      <header className='fixed left-0 right-0 top-0 z-10 px-6 py-4 bg-white'>
        <div className='flex'>
          <button type='button' className='flex justify-center items-center p-4'>
            <ArrowLeftIcon className='size-5' />
          </button>
          <form className=''>
            <label className='flex relative h-[52px] border-2 rounded-2xl  border-zinc-300'>
              <span className='flex justify-center items-center absolute left-4 h-full'>
                <MagnifyingGlassIcon className='size-5' />
              </span>
              <input type='text' placeholder='emilys' defaultValue='emilys' className='w-full h-full pl-12 rounded-2xl  border-zinc-300 ' />
            </label>
          </form>
          <button type='button' className='flex justify-center items-center p-4'>
            <AdjustmentsHorizontalIcon className='size-5' />
          </button>
        </div>
        <nav className='mt-2'>
          <main className='overflow-x-auto'>
            <SearchCarouselGroup />
          </main>
        </nav>
      </header>
      <main className='mt-6 z-1'>
        <div className='h-[116px]' data-desc='empty-space-under-header' />
        {/* grid */}
        <SearchCards />
      </main>
    </body>
  );
};
