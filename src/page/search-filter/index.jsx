import {StarIcon, XMarkIcon} from '@heroicons/react/24/outline';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {OutlineButtonList} from '../../components/outline-button-list';
import {MinimumDistanceSlider} from '../../components/slider';
import {getAutoCompleteList} from '../../service/service';
import {styles} from '../../style.js';

export const searchFilterLoader = async () => {
  // console.log('from ProductListLoader');
  const autoCompleteList = await getAutoCompleteList();
  return {autoCompleteList};
};

/**
 * @type {React.FC}
 */
export const SearchFilter = () => {
  const navigate = useNavigate();
  const [categorySelected, setCategorySelected] = useState('beauty');
  const [rate, setRate] = useState(5);
  const [minPrice, setMinPrice] = useState(40);
  const [maxPrice, setMaxPrice] = useState(100);
  // const formData = useRef('');

  /** @type {React.FormEventHandler<HTMLFormElement>} */
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log('handleSubmit formData', formData);
    navigate('/search-result', {state: formData});
  };

  // Question: 動彈不得
  // console.log('outside value2', minPrice);

  return (
    <div className='px-6 py-14 h-full'>
      <header className='flex justify-between mb-10 font-bold'>
        <button className='flex justify-center items-center' onClick={() => navigate(-1)}>
          <XMarkIcon className='size-5' />
        </button>
        <h1 className='text-xl font-bold'>篩選</h1>
        <div className='size-5' data-desc='為了均分三等份' />
      </header>
      <form onSubmit={handleSubmit}>
        <div className='mb-5 pb-5 border-b-2 '>
          <div className='pb-4 text-xs font-semibold'>類別</div>
          <label className=''>
            <OutlineButtonList requestQuery='category' linkable={false} selecting={(item) => setCategorySelected(item)} selected={categorySelected} />
          </label>
        </div>
        <div className='mb-5 pb-5 border-b-2 '>
          <div className='pb-4 text-xs font-semibold'>價格</div>
          <MinimumDistanceSlider
            minPrice={minPrice}
            maxPrice={maxPrice}
            getMinPrice={(minPrice) => {
              console.log('success');
              setMinPrice(minPrice);
            }}
          />
        </div>
        <div className='mb-5'>
          <div className='pb-4 text-xs font-semibold'>評價</div>
          <div className='flex flex-wrap gap-3'>
            {/* Question: key */}
            {Array.from({length: 5}, (_, i) => (
              <label key={i} className={`flex ${styles.outlineButton} ${rate === i + 1 ? 'bg-green-primary border-transparent text-white' : ''}`}>
                <input type='radio' name='minRating' value={i + 1} checked={rate === i + 1} onChange={() => setRate(i + 1)} className='hidden' />
                <div className='flex'>{Array(i + 1).fill(<StarIcon className='size-5' />)}</div>
              </label>
            )).reverse()}
          </div>
        </div>
        <div className='flex gap-[17px] pt-5 border-t-2 '>
          <button type='reset' className='h-[54px] bg-white text-black grow border border-black rounded-2xl'>
            重置
          </button>
          <button type='submit' className='h-[54px] bg-black text-white grow border border-black rounded-2xl'>
            搜尋
          </button>
        </div>
      </form>
    </div>
  );
};
