import {ProductCard} from '../product-card';

/**
 *
 * @param {*} param0.productList
 * @returns {JSX.Element}
 */
export const ProductList = ({productList}) => {
  // const discountItems = new Array(30).fill({
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

  return (
    <div className='grid grid-cols-2 gap-x-[19px] gap-y-[38px] mx-auto'>
      {productList.map(({title, discountPercentage, price, thumbnail, description}) => (
        <ProductCard title={title} discountPercentage={discountPercentage} price={price} thumbnail={thumbnail} description={description} />
      ))}
    </div>
  );
};
