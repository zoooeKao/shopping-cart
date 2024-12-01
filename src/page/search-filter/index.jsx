import {StarIcon, XMarkIcon} from '@heroicons/react/24/outline';
import {Slider} from '@mui/material';
import * as React from 'react';
import {useRef, useState} from 'react';
import {useLoaderData, useNavigate} from 'react-router-dom';
import {MaxWidth} from '../../components/wrapper/outside-wrapper';
import {getAutoCompleteList} from '../../service/service';
import {styles} from '../../style';

/** @typedef {Exclude<Awaited<ReturnType<typeof searchFilterLoader>>, Response>} ReturnSearchFilterLoader */

const MIN_DISTANCE = 100;
const MIN_PRICE = 0;
const MAX_PRICE = 13999.99;

export const searchFilterLoader = () => {
  return getAutoCompleteList().then((autoCompleteList) => {
    return {autoCompleteList};
  });
};

/**
 * @type {React.FC}
 */
export const SearchFilter = () => {
  const navigate = useNavigate();
  const {autoCompleteList} = /** @type {ReturnSearchFilterLoader} */ (useLoaderData());
  // const [MIN_PRICE, MAX_PRICE] = priceRangeLoader;
  const [selectedCategory, setSelectedCategory] = useState('beauty');
  const [selectedRate, setSelectedRate] = useState(1);
  const [priceRange, setPriceRange] = useState([MIN_PRICE, MAX_PRICE]);
  const formRef = useRef(null);

  /** @type {React.FormEventHandler<HTMLButtonElement>} */
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formRef.current !== null) {
      const formData = new FormData(/** @type {HTMLFormElement} */ formRef.current);

      formData.append('minPrice', String(priceRange[0]));
      formData.append('maxPrice', String(priceRange[1]));

      const params = new URLSearchParams();
      for (const [key, value] of formData.entries()) {
        params.append(key, String(value));
      }
      navigate(`/products-lists?${new URLSearchParams(params)}`);
    }
  };

  /** @type {React.FormEventHandler<HTMLButtonElement>} */
  const handleReset = (event) => {
    event.preventDefault();
    setSelectedCategory('beauty');
    setSelectedRate(1);
    setPriceRange(priceRange);
  };

  /**
   * 拖曳滑桿資料變更的函數，用於更新價格範圍，並確保兩個滑桿之間維持最小距離 minDistance。
   * @type {(event: Event, value: number | number[], activeThumb: number) => void}
   */
  const handleChangeSlider = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setPriceRange([Math.min(newValue[0], priceRange[1] - MIN_DISTANCE), priceRange[1]]);
    } else {
      setPriceRange([priceRange[0], Math.max(newValue[1], priceRange[0] + MIN_DISTANCE)]);
    }
  };

  return (
    <MaxWidth>
      <div className='px-6 py-14'>
        <header className='flex justify-between mb-10 font-bold'>
          <button
            className='flex justify-center items-center'
            onClick={() => navigate(-1)}>
            <XMarkIcon className='size-5' />
          </button>
          <h1 className='text-xl font-bold'>篩選</h1>
          <div
            data-desc='為了均分三等份'
            className='size-5'
          />
        </header>

        <form ref={formRef}>
          <div className='mb-5 pb-5 border-b-2 '>
            <div className='pb-4 text-xs font-semibold'>類別</div>
            <div className={`flex flex-wrap gap-3`}>
              {autoCompleteList.category.map((item) => {
                return (
                  <label
                    key={item}
                    className={`${styles.outlineButton} ${selectedCategory === item ? 'bg-green-primary border-transparent text-white' : ''}`}>
                    {item}
                    <input
                      type='radio'
                      name='category'
                      value={item}
                      checked={selectedCategory === item}
                      onChange={() => setSelectedCategory(item)}
                      className='hidden'
                    />
                  </label>
                );
              })}
            </div>
          </div>
          <div className='mb-5 pb-5 border-b-2'>
            <div className='pb-8 text-xs font-semibold'>價格</div>
            {/* Question: 跑版 */}
            {/* Code review: 設定 maxWith */}
            <Slider
              sx={{width: '350px', maxWidth: '100%', color: '#07BFA5'}}
              min={MIN_PRICE}
              max={MAX_PRICE}
              step={500}
              getAriaLabel={() => 'Minimum distance shift'}
              value={priceRange}
              onChange={handleChangeSlider}
              valueLabelDisplay='on'
              getAriaValueText={() => 'Minimum distance'}
              disableSwap
            />
          </div>
          <div className='mb-5'>
            <div className='pb-4 text-xs font-semibold'>評價</div>
            <div className='flex flex-wrap gap-3'>
              {/* Code Review: Array.from() 較佳選擇 vs Array() => undefined(iterable), empty slots */}
              {Array.from({length: 5}, (_, i) => (
                <label
                  key={i}
                  className={`flex ${styles.outlineButton} ${selectedRate === i + 1 ? 'bg-green-primary border-transparent text-white' : ''}`}>
                  <input
                    type='radio'
                    name='minRating'
                    value={i + 1}
                    checked={selectedRate === i + 1}
                    onChange={() => setSelectedRate(i + 1)}
                    className='hidden'
                  />
                  <span className='flex'>
                    {Array.from({length: i + 1}).map((_, i) => (
                      <StarIcon
                        key={i}
                        className='size-5'
                      />
                    ))}
                  </span>
                </label>
              )).reverse()}
            </div>
          </div>
          <div className='flex gap-[17px] pt-5 border-t-2'>
            <button
              type='reset'
              onClick={(event) => handleReset(event)}
              className='h-[54px] bg-white text-black grow border border-black rounded-2xl'>
              重置
            </button>
            <button
              type='submit'
              onClick={(event) => handleSubmit(event)}
              className='h-[54px] bg-black text-white grow border border-black rounded-2xl'>
              搜尋
            </button>
          </div>
        </form>
      </div>
    </MaxWidth>
  );
};
