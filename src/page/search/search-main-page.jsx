import {AdjustmentsHorizontalIcon, ArrowLeftIcon, MagnifyingGlassIcon} from '@heroicons/react/24/outline';
import {SearchCards} from '../../components/search-card/searchCards';
import {SearchCarouselGroup} from '../../components/search-carousel/searchCarouselGroup';

export const SearchMainPage = () => {
  return (
    // Code review: 為甚麼header的z-index設2不行
    // Code review: 不透過 z-index 調整，後面出現的 position 會覆蓋前面的
    // Code review: chrome 可以看 stacking context。command+shift+p >layer

    // method 1: 不透過 z-index
    <div className='px-6'>
      <main className='mt-6'>
        <SearchCards />
      </main>
      <header className='fixed top-0 left-0 right-0 px-4 py-4 bg-white'>
        <div className='flex justify-center gap-4'>
          <button type='button' className='flex justify-center items-center text-start'>
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
          <button type='button' className='flex justify-center items-center text-end'>
            <AdjustmentsHorizontalIcon className='size-5' />
          </button>
        </div>
        <nav className='mt-2'>
          <div className='overflow-x-auto'>
            <SearchCarouselGroup />
          </div>
        </nav>
      </header>
    </div>

    // method 2:
    // <div className='relative px-6'>
    //   <header className='sticky z-10 top-0 py-4 bg-white'>
    //     <div className='flex justify-center gap-4'>
    //       <button type='button' className='flex justify-center items-center text-start'>
    //         <ArrowLeftIcon className='size-5' />
    //       </button>
    //       <form className=''>
    //         <label className='flex relative h-[52px] border-2 rounded-2xl  border-zinc-300'>
    //           <span className='flex justify-center items-center absolute left-4 h-full'>
    //             <MagnifyingGlassIcon className='size-5' />
    //           </span>
    //           <input type='text' placeholder='emilys' defaultValue='emilys' className='w-full h-full pl-12 rounded-2xl  border-zinc-300 ' />
    //         </label>
    //       </form>
    //       <button type='button' className='flex justify-center items-center text-end'>
    //         <AdjustmentsHorizontalIcon className='size-5' />
    //       </button>
    //     </div>
    //     <nav className='mt-2'>
    //       <div className='overflow-x-auto'>
    //         <SearchCarouselGroup />
    //       </div>
    //     </nav>
    //   </header>
    //   <main className='mt-6'>
    //     {/* <div className='h-[116px]' data-desc='empty-space-under-header' /> */}
    //     <SearchCards />
    //   </main>
    // </div>

    // method 3:
    // <body className='px-6'>
    //   <header className='py-4 bg-white'>
    //     <div className='flex justify-center gap-4'>
    //       <button type='button' className='flex justify-center items-center text-start'>
    //         <ArrowLeftIcon className='size-5' />
    //       </button>
    //       <form className=''>
    //         <label className='flex relative h-[52px] border-2 rounded-2xl  border-zinc-300'>
    //           <span className='flex justify-center items-center absolute left-4 h-full'>
    //             <MagnifyingGlassIcon className='size-5' />
    //           </span>
    //           <input type='text' placeholder='emilys' defaultValue='emilys' className='w-full h-full pl-12 rounded-2xl  border-zinc-300 ' />
    //         </label>
    //       </form>
    //       <button type='button' className='flex justify-center items-center text-end'>
    //         <AdjustmentsHorizontalIcon className='size-5' />
    //       </button>
    //     </div>
    //     <nav className='mt-2'>
    //       <main className='overflow-x-auto'>
    //         <SearchCarouselGroup />
    //       </main>
    //     </nav>
    //   </header>
    //   <main className='mt-6 h-[calc(100%-32px)] overflow-auto'>
    //     {/* grid */}
    //     <SearchCards />
    //   </main>
    // </body>
  );
};
