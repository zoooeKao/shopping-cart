import {AdjustmentsHorizontalIcon, ArrowLeftIcon, MagnifyingGlassIcon} from '@heroicons/react/24/outline';
import {useEffect, useRef, useState} from 'react';
import {Link, useLocation, useNavigate, useSearchParams} from 'react-router-dom';
import {OutlineButtonList} from '../../components/outline-button-list';
import {ProductList} from '../../components/product-list';
import {getAutoCompleteList, getSearchProduct} from '../../service/service';

export const searchResultLoader = async () => {
  const autoCompleteList = await getAutoCompleteList();
  return {autoCompleteList};
};

/**
 * @type {React.FC}
 */
export const SearchResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const prevLocation = useRef(location);
  const [brandSelected, setBrandSelected] = useState('');
  // 先將 location 儲存下來
  // brandSelected 有更新時
  // searchParams = previous location + brandSelected

  const [searchParams, setSearchParams] = useSearchParams(new URLSearchParams(location.state) || '');
  console.log('searchParams', searchParams);
  const [productList, setProductList] = useState([]);

  const apiKeys = ['keyword', 'brand', 'category', 'minPrice', 'maxPrice', 'minDiscount', 'maxDiscount', 'minRating', 'maxRating'];

  useEffect(() => {
    console.log(window.location.search);
    console.log('prevLocation', prevLocation.current.state);
    // setSearchParams(new URLSearchParams(window.location.search));
  }, [brandSelected]);

  useEffect(() => {
    const queryKeysArr = Array.from(searchParams.keys());
    const delArr = queryKeysArr.filter((item, index) => queryKeysArr.indexOf(item) !== index || !apiKeys.includes(item));
    let newSearchParams = new URLSearchParams(searchParams);

    if (delArr.length > 0) {
      // Question: 有需要新建一個 URLSearchParams 嗎?
      // Method1
      // for (const key of delArr) {
      //   searchParams.delete(key);
      // }
      // setSearchParams(searchParams);

      // Method2
      for (const key of delArr) {
        newSearchParams.delete(key);
      }
    }
    setSearchParams(newSearchParams);

    const fetchGetProducts = async () => {
      const result = await getSearchProduct(newSearchParams);
      setProductList(result.products);
    };

    fetchGetProducts();
  }, [searchParams]);

  return (
    // Code review: 為甚麼header的z-index設2不行
    // Code review: 不透過 z-index 調整，後面出現的 position 會覆蓋前面的
    // Code review: chrome 可以看 stacking context。command+shift+p >layer

    // method 1: 不透過 z-index
    <div className='px-6'>
      <section className='h-[132px]' data-desc='empty-space-under-fixed' />
      <main className='mt-6'>{productList.length > 0 ? <ProductList productList={productList} /> : <>Can not find anything...</>}</main>
      <header className='fixed top-0 left-0 right-0 px-4 py-4 bg-white'>
        <div className='flex justify-center gap-4'>
          <button type='button' className='flex justify-center items-center text-start' onClick={() => navigate(-1)}>
            <ArrowLeftIcon className='size-7' />
          </button>
          <form className=''>
            <label className='flex relative h-[52px] border-2 rounded-2xl  border-zinc-300'>
              <span className='flex justify-center items-center absolute left-4 h-full'>
                <MagnifyingGlassIcon className='size-5' />
              </span>
              <input type='text' placeholder='searching...' className='w-full h-full pl-12 rounded-2xl  border-zinc-300 ' />
            </label>
          </form>
          <button type='button' className='flex justify-center items-center text-end'>
            <Link to='/search-filter'>
              <AdjustmentsHorizontalIcon className='size-7' />
            </Link>
          </button>
        </div>
        <nav className='mt-2'>
          <div className='overflow-x-auto'>
            <OutlineButtonList requestQuery='brand' linkable={true} selecting={(item) => setBrandSelected(item)} selected={brandSelected} />
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
