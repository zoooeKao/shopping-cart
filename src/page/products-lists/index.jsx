import {AdjustmentsHorizontalIcon, ArrowLongLeftIcon, MagnifyingGlassIcon} from '@heroicons/react/24/outline';
import {useEffect, useMemo, useState} from 'react';
import {Link, useLoaderData, useNavigate} from 'react-router-dom';
import {ProductCardList} from '../../components/product-card-list';
import {MaxWidth} from '../../components/wrapper/outside-wrapper';
import {getAllProduct, getAutoCompleteList, getSearchProduct} from '../../service/service';
import {styles} from '../../style';

/** @typedef {Exclude<Awaited<ReturnType<typeof productsListsLoader>>, Response>} ReturnProductList */

export const productsListsLoader = () => {
  return Promise.all([getAutoCompleteList(), getAllProduct()]).then(([autoCompleteList, allProduct]) => {
    return {autoCompleteList, allProduct};
  });
};

/**
 * @type {React.FC}
 */
export const ProductsLists = () => {
  const {autoCompleteList} = /** @type {ReturnProductList} */ (useLoaderData());
  const {brand} = autoCompleteList;
  const navigate = useNavigate();

  const [proList, setProList] = useState(/**@type {import('../../env').Product[]} */ ([]));
  const [brandList, setBrandList] = useState(brand);

  const [keyword, setKeyword] = useState('');

  const usp = useMemo(() => {
    return new URLSearchParams(window.location.search);
  }, [window.location.search]);

  /** @type {React.FormEventHandler<HTMLFormElement>} */
  const handleSubmit = (event) => {
    event.preventDefault();

    usp.append('keyword', keyword);
    navigate(`?${usp}`);
  };

  useEffect(() => {
    getSearchProduct(usp).then((productPayload) => {
      setProList(productPayload.products);
      setBrandList([...new Set(productPayload.products.map((product) => product.brand))]);
    });
  }, [usp]);

  return (
    // method 1: 不透過 z-index
    <MaxWidth>
      <section
        className='h-[132px]'
        data-desc='empty-space-under-fixed'
      />
      <main className='mt-6 p-6'>
        {proList.length !== 0 ? (
          <ProductCardList
            productList={proList}
            style={styles.productCardList}
          />
        ) : (
          <div>Can not find anything...</div>
        )}
      </main>

      <header className='fixed top-0 left-0 right-0 max-w-[375px] mx-auto py-4 bg-white'>
        <div className='flex justify-around'>
          <button
            type='button'
            className='flex justify-center items-center text-start'
            onClick={() => navigate('/')}>
            <ArrowLongLeftIcon className='size-7' />
          </button>
          <form onSubmit={handleSubmit}>
            <label className='flex relative h-[52px] border-2 rounded-2xl  border-zinc-300'>
              <span className='flex justify-center items-center absolute left-4 h-full'>
                <MagnifyingGlassIcon className='size-5' />
              </span>
              <input
                type='text'
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
                placeholder='search something...'
                className='w-full pl-12 rounded-2xl border-zinc-300'
              />
            </label>
          </form>
          <button
            type='button'
            className='flex justify-center items-center text-end'>
            <Link to='/search-filter'>
              <AdjustmentsHorizontalIcon className='size-7' />
            </Link>
          </button>
        </div>
        <nav className='max-w-[375px] mx-auto mt-2 flex justify-start overflow-x-auto pl-4'>
          <ul className={`flex flex-nowrap gap-3`}>
            {brandList.length > 0 &&
              brandList.map((item, i) => {
                return (
                  <li key={i}>
                    <button
                      onClick={() => {
                        usp.append('brand', item);
                        if (item) {
                          // API有一個brand是空值
                          navigate(`?${usp.toString()}`);
                        }
                      }}
                      className={`${styles.outlineButton} ${usp.get('brand') === item ? 'bg-black border-transparent text-white' : ''}`}>
                      <div className='whitespace-nowrap'>{item ?? 'waiting...'}</div>
                    </button>
                  </li>
                );
              })}
          </ul>
        </nav>
      </header>
    </MaxWidth>
  );
};
