import {useLoaderData} from 'react-router-dom';
import {ProductCard} from '../product-card';

/**
 * @type {React.FC}
 */
export const PromotionalList = () => {
  // const promotionalItems = new Array(30).fill({
  //   title: 'Essence Mascara Lash Princess',
  //   brand: 'Essence',
  //   category: 'beauty',
  //   discountPercentage: 7.17,
  //   images: ['https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png'],
  //   price: 9.99,
  //   rating: 4.94,
  //   stock: 5,
  //   availabilityStatus: 'Low Stock',
  //   tags: ['beauty', 'mascara'],
  //   thumbnail: 'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png',
  //   weight: 2,
  // });

  const {
    allProduct: {products},
  } = useLoaderData();

  return (
    <div className='flex gap-3'>
      {products.map(({id, title, discountPercentage, price, thumbnail, description}) => (
        <ProductCard key={id} title={title} discountPercentage={discountPercentage} price={price} thumbnail={thumbnail} description={description} />
      ))}
    </div>
  );
};
