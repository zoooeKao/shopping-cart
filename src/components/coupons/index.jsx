import {CouponItem} from '../coupon';

export const CouponItems = () => {
  const couponItems = new Array(5).fill({
    brand: 'Essence',
    discountPercentage: 50,
  });

  return (
    <div className='flex gap-2'>
      {couponItems.map(({brand, discountPercentage}) => (
        <CouponItem brand={brand} discountPercentage={discountPercentage} />
      ))}
    </div>
  );
};
