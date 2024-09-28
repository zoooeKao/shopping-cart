import {HeartIcon} from '@heroicons/react/24/outline';
import {PlusCircleIcon} from '@heroicons/react/24/solid';
import {Link} from 'react-router-dom';

/** @param {Object} param0
 * @param {import('../../env').Product['title']} param0.title
 * @param {import('../../env').Product['discountPercentage']} param0.discountPercentage
 * @param {import('../../env').Product['price']} param0.price
 * @param {import('../../env').Product['thumbnail']} param0.thumbnail
 * @param {import('../../env').Product['description']} param0.description
 * @returns {JSX.Element}
 */
export const ProductCard = ({title, discountPercentage, price, thumbnail, description}) => {
  const discountPrice = (price / ((100 - Math.round(discountPercentage)) / 100)).toFixed(2);
  return (
    <div className='shrink-0 relative pt-3 px-3 w-[154px] h-[228px] rounded-2xl bg-white shadow-xl mx-auto'>
      {/* <Link to='/product-description' state={{title: {title}, price: {price}}}> */}
      {/* <Link to='/product-description' state={{title: title, discountPrice: discountPrice, description: description, thumbnail: thumbnail}}> */}
      <Link to='/product-description' state={{title, discountPrice, description, thumbnail}}>
        <div className='flex justify-between'>
          <span className='flex justify-center items-center w-[35px] h-[20px] rounded-md font-semibold text-xs text-white bg-red-primary'>{Math.round(discountPercentage)}%</span>
          <button type='button'>
            <HeartIcon className='size-5' />
          </button>
        </div>
        <img src={thumbnail} className='w-full h-[90px]' />
        <div className='text-center mt-4 line-clamp-2'>{title}</div>
        <div className='flex justify-evenly mt-1'>
          <div className='text-sm font-extrabold'>{`$${price}`}</div>
          <div className='text-sm font-medium line-through text-zinc-400'>{`$${discountPrice}`}</div>
        </div>
        <button type='button' className='absolute left-[50%] bottom-0 -translate-x-1/2 translate-y-1/2 rounded-full'>
          <PlusCircleIcon className='size-12 text-green-primary' />
        </button>
      </Link>
    </div>
  );
};
