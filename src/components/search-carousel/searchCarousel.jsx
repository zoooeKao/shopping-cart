export const SearchCategory = ({product}) => {
  return (
    <button className='flex gap-4 justify-center items-center px-[39px] py-[7px] rounded-xl border-black border-[1px]'>
      <div className='shrink-0'>{product}</div>
    </button>
  );
};
