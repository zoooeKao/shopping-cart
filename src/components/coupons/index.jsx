import {useAtom} from 'jotai';
import {coupon} from '../../model/jotai/atom';

const discountedBrands = ['Amazon', 'Rolex'];

/** @type {React.FC} */
export const CouponItems = () => {
  const [selectedDiscountedBrands, setSelectedDiscountedBrands] = useAtom(coupon);

  return (
    <div className='flex gap-2'>
      {discountedBrands.map((brand, i) => {
        const hasDiscount = selectedDiscountedBrands.includes(brand);
        return (
          <div
            key={i}
            className='flex shrink-0 relative items-center w-[324px] h-[80px] bg-red-200 rounded-3xl'>
            <div className='flex items-center gap-5 border-r-2 border-dotted border-black my-5 mx-3 w-3/5'>
              <div className='size-14 bg-white rounded-2xl flex justify-center items-center'>
                <img
                  src={`/img-coupon/${brand.toLowerCase()}.png`}
                  alt={brand}
                  className='p-2'
                />
              </div>
              <div className='font-black'>
                <div className='line-clamp-1'>{brand}</div>
                <div>50% off</div>
              </div>
            </div>
            <div className='flex justify-center items-center w-2/5 '>
              <button
                type='button'
                disabled={hasDiscount}
                onClick={() => {
                  setSelectedDiscountedBrands((prev) => {
                    return [...prev, brand];
                  });
                }}
                className={`px-5 py-[6px] font-extrabold border-2 border-slate-950 rounded-3xl ${hasDiscount ? 'bg-gray-100' : 'bg-white'}`}>
                {hasDiscount ? '已領取' : '領取'}
              </button>
            </div>
            <div
              className='absolute top-0 left-[60%] size-6 bg-white rounded-full translate-x-[-60%] translate-y-[-50%]'
              data-desc='coupon-semi-up-circle'></div>
            <div
              className='absolute bottom-0 left-[60%] size-6 bg-white rounded-full translate-x-[-60%] translate-y-[50%]'
              data-desc='coupon-semi-down-circle'></div>
          </div>
        );
      })}
    </div>
  );
};
