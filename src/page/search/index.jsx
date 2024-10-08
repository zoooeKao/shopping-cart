import {CameraIcon, MagnifyingGlassIcon, XMarkIcon} from '@heroicons/react/24/outline';
import {useLoaderData} from 'react-router-dom';
import {AutoCompleteList} from '../../components/auto-complete-list';
import {Navbar} from '../../components/nav';
import {getAutoCompleteList} from '../../service/service';

export const searchLoader = async () => {
  console.log('from search');
  const autoCompleteList = await getAutoCompleteList();
  return {autoCompleteList};
};

/**
 * @type {React.FC}
 */
export const SearchPage = () => {
  /**
   * @type {{autoCompleteList: import('../../env').AutoCompleteList; allProduct: import('../../env').AllProduct}}
   */
  const {
    autoCompleteList: {brand, category},
  } = useLoaderData();
  // console.log('brand', brand, 'category', category);

  return (
    <div className='px-6'>
      <header className='pt-4 bg-white'>
        <form>
          <label className='flex relative mt-4 h-[52px]'>
            <span className='flex justify-center items-center absolute left-4 h-full'>
              <MagnifyingGlassIcon className='size-5' />
            </span>
            <input type='text' placeholder='search' className='w-full pl-12 border-2 rounded-2xl' />
            <button className='flex justify-center items-center absolute right-4 h-full'>
              <CameraIcon className='size-5' />
            </button>
          </label>
        </form>
      </header>

      <div className='flex flex-col gap-y-[20px] my-6 pb-6 border-b-2' data-desc='最近搜尋'>
        <div className='text-[18px] font-bold leading-6'>最近搜尋</div>
        {/* TODO */}
        <div className='flex justify-between'>
          <span>富士相機</span>
          <button type='button'>
            <XMarkIcon className='size-5' />
          </button>
        </div>
        <div className='flex justify-between'>
          <span>富士相機</span>
          <button type='button'>
            <XMarkIcon className='size-5' />
          </button>
        </div>
        <div className='flex justify-between'>
          <span>富士相機</span>
          <button type='button'>
            <XMarkIcon className='size-5' />
          </button>
        </div>
      </div>

      <div className='flex flex-col' data-desc='趨勢搜尋'>
        <div className='text-[18px] font-bold leading-6 h-8 mb-4'>趨勢搜尋</div>
        <AutoCompleteList requestQuery='category' layout='grid-cols-2' flow='grid-flow-row' />
      </div>

      <Navbar />
    </div>
  );
};
