import {SearchCategory} from './searchCarousel';

export const SearchCarouselGroup = () => {
  const searchCategories = new Array(11).fill({product: '照相機'});

  return (
    <div className='grid grid-flow-col gap-3 '>
      {searchCategories.map(({product}) => (
        <SearchCategory product={product} />
      ))}
    </div>
  );
};
