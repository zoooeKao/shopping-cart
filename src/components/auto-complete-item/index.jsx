import {TagIcon} from '@heroicons/react/24/solid';
import {Link} from 'react-router-dom';

/** @param {Object} param0
 * @param {'brand' | 'category'} param0.requestQuery
 * @param {string} param0.item
 * @returns {JSX.Element}
 */
export const AutoCompleteItem = ({requestQuery, item}) => {
  return (
    <Link to='/search-result' state={{[requestQuery]: item}}>
      <button className='flex gap-5 items-center justify-center p-4 w-[164px] h-[88px] rounded-2xl bg-light-grey-secondary '>
        <div className='w-4/5 line-clamp-2 text-start'>{item ?? 'Please look forward to it...'}</div>
        <div className='flex justify-center items-center w-2/5 h-full'>
          <TagIcon className='size-10 text-green-primary' />
        </div>
      </button>
    </Link>
  );
};

// A-1
// path:'/'   <AutoCompleteLists />
// click brand (/)
// 將結果儲存到網址

// A-2
// path:'search'   <SearchIndexPage />
// click category (/)
// 將結果儲存到網址

// B
// path:'search-main'   <SearchMainPage />,
// 解析網址 (/search-main?brand=點擊的品牌)
// 找到該品牌下的所有產品儲存到變數[]
// 將變數渲染到產品卡
