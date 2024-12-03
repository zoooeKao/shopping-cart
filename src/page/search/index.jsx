import {CameraIcon, MagnifyingGlassIcon, XMarkIcon} from '@heroicons/react/24/outline';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {AutoCompleteList} from '../../components/auto-complete-list';
import {Navbar} from '../../components/nav';
import {MaxWidth} from '../../components/wrapper/outside-wrapper';
import {getAutoCompleteList} from '../../service/service';

const LOCAL_SEARCH_HISTORY_KEY = 'search_history';

/**
 * @returns {Promise<{autoCompleteList: import('../../env').AutoCompleteList}>}
 */
export const searchLoader = () => {
  return getAutoCompleteList().then((autoCompleteList) => ({autoCompleteList}));
};

/**
 * @type {React.FC}
 */
export const SearchPage = () => {
  const navigate = useNavigate();
  const [keyword, setKeywords] = useState('');
  const [searchHistory, setSearchHistory] = useState(/** @type {string[]} **/ ([]));

  // Code review: local storage 只需在初次載入時讀取，若設為 searchHistory 的初始值，則每次元件載入都會重複取值。
  useEffect(() => {
    setSearchHistory(/** @type {string[]} **/ (JSON.parse(localStorage.getItem(LOCAL_SEARCH_HISTORY_KEY) || '[]')));
  }, []);

  /** @type {React.FormEventHandler<HTMLFormElement>} */
  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmed = keyword.trim();
    if (trimmed) {
      const updated = [trimmed, ...searchHistory];
      setSearchHistory(updated);
      // Question: 為什麼存到 local storage 就會自動格式化
      localStorage.setItem(LOCAL_SEARCH_HISTORY_KEY, JSON.stringify(updated));

      navigate(
        `/products-lists?${new URLSearchParams(
          trimmed
            .split(' ')
            .filter((kw) => kw !== '')
            .map((kw) => ['keyword', kw])
        )}`
      );
    }
  };

  const handleDel = (/** @type {number}*/ i) => {
    const updateSearchHistory = searchHistory.filter((_, index) => index !== i);

    if (updateSearchHistory.length === 0) {
      localStorage.removeItem(LOCAL_SEARCH_HISTORY_KEY);
      setSearchHistory([]);
    } else {
      localStorage.setItem(LOCAL_SEARCH_HISTORY_KEY, JSON.stringify(updateSearchHistory));
      setSearchHistory(updateSearchHistory);
    }
  };

  return (
    <MaxWidth>
      <div className='px-6'>
        <header className='pt-4 bg-white'>
          <form onSubmit={handleSubmit}>
            <label className='flex relative mt-4 h-[52px] border-2 rounded-2xl  border-zinc-300'>
              <span className='flex justify-center items-center absolute left-4 h-full'>
                <MagnifyingGlassIcon className='size-5' />
              </span>
              <input
                type='text'
                value={keyword}
                onChange={(event) => setKeywords(event.target.value)}
                placeholder='search something...'
                className='w-full pl-12 rounded-2xl border-zinc-300'
              />
              <button className='flex justify-center items-center absolute right-4 h-full'>
                <CameraIcon className='size-5' />
              </button>
            </label>
          </form>
        </header>

        <div
          className='flex flex-col gap-y-[20px] my-6 pb-6 border-b-2'
          data-desc='最近搜尋'>
          <div className='text-[18px] font-bold leading-6'>最近搜尋</div>
          {searchHistory
            ? searchHistory.map((kw, i) => (
                <div
                  key={i}
                  className='flex justify-between'>
                  <button
                    onClick={() =>
                      navigate(
                        `/products-lists?${new URLSearchParams(
                          kw
                            .trim()
                            .split(' ')
                            .filter((kw) => kw !== '')
                            .map((kw) => ['keyword', kw])
                        )}`
                      )
                    }>
                    {/* Question: 為什麼存到 searchHistory render 出來的 kw 會自動格式化 */}
                    {`${kw}`}
                  </button>
                  <button
                    type='button'
                    onClick={() => handleDel(i)}>
                    <XMarkIcon className='size-5' />
                  </button>
                </div>
              ))
            : ''}
        </div>

        <div
          className='flex flex-col'
          data-desc='趨勢搜尋'>
          <div className='text-[18px] font-bold leading-6 h-8 mb-4'>趨勢搜尋</div>
          <AutoCompleteList
            requestQuery='category'
            layout='grid-cols-2'
            flow='grid-flow-row'
            data-desc='category'
          />
        </div>

        <Navbar />
      </div>
    </MaxWidth>
  );
};
