import {DiscountItem} from '../discount-item';

export const DiscountItems = () => {
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
    <div className='flex gap-3 mt-4'>
      {discountItems.map(({title, discountPercentage, price, thumbnail}) => (
        <DiscountItem title={title} discountPercentage={discountPercentage} price={price} thumbnail={thumbnail} />
      ))}
    </div>
  );
};
