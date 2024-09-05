import {ProductCard} from '../product-card';

export const SearchCards = () => {
  const discountItems = new Array(30).fill({
    title: 'Essence Mascara Lash Princess',
    brand: 'Essence',
    category: 'beauty',
    discountPercentage: 7.17,
    images: ['https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png'],
    price: 9.99,
    rating: 4.94,
    stock: 5,
    availabilityStatus: 'Low Stock',
    tags: ['beauty', 'mascara'],
    thumbnail: 'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png',
    weight: 2,
  });

  return (
    <div className='grid grid-cols-2 gap-x-[19px] gap-y-[38px] mx-auto'>
      {discountItems.map(({title, discountPercentage, price, thumbnail}) => (
        <ProductCard title={title} discountPercentage={discountPercentage} price={price} thumbnail={thumbnail} />
      ))}
    </div>
  );
};
