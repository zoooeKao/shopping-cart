export const CouponItem = () => {
  return (
    <>
      <div className='flex relative items-center w-[324px] h-[96px] bg-red-200 rounded-3xl'>
        <div className='flex items-center gap-6 border-r-2 border-dotted border-black my-5 mx-3 w-3/5 '>
          <div className='size-14 bg-white rounded-2xl'></div>
          <div className='font-black'>50%折扣</div>
        </div>
        <div className='flex justify-center items-center w-2/5 '>
          <button type='button' className='px-5 py-[6px] font-extrabold border-2 border-slate-950 rounded-3xl bg-white'>
            領取
          </button>
        </div>
        <div className='absolute top-0 left-[60%] size-6 bg-white rounded-full translate-x-[-60%] translate-y-[-50%]' data-desc='coupon-corner'></div>
        <div className='absolute bottom-0 left-[60%] size-6 bg-white rounded-full translate-x-[-60%] translate-y-[50%]' data-desc='coupon-corner'></div>
      </div>
    </>
  );
};
