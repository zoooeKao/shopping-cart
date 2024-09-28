import {useLoaderData} from 'react-router-dom';
import {CouponItem} from '../coupon';

/**
 * @type {React.FC}
 */
export const CouponItems = () => {
  // const couponItems = new Array(5).fill({
  //   brand: 'Essence',
  //   discountPercentage: 50,
  // });
  const {
    autoCompleteList: {brand},
  } = useLoaderData();

  const promotionalBrand = brand.slice(5, 10);

  return (
    <div className='flex gap-2'>
      {promotionalBrand.map((brand) => (
        <CouponItem key={brand} brand={brand} />
      ))}
    </div>
  );
};
