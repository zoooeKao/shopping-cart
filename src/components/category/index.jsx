export const Category = ({product, price}) => {
  return (
    <div className='flex gap-5 items-center p-4 w-[154px] h-[88px] rounded-2xl bg-secondary '>
      <div className='w-[59px] h-[22px]'>{product}</div>
      <div className='w-[52px] h-[52px]'>{price}</div>
      {/* <TagIcon className='size-12 fill-teal-600' /> */}
    </div>
  );
};
