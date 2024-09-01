import {Category} from '../category';

export const Categories = () => {
  const categories = new Array(11).fill({product: '照相機', price: 100});

  return (
    // <div className='flex  flex-wrap gap-3 h-[188px]'>
    <div className='grid grid-rows-2 grid-flow-col gap-3 '>
      {categories.map((category) => (
        <Category product={category.product} price={category.price} />
      ))}
    </div>
  );
};
