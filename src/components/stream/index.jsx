import imgStream from './BG.png';

export const Stream = () => {
  return (
    <div className='relative shrink-0 w-[154px] h-[208px] rounded-3xl  text-white'>
      <span className='absolute top-3 left-5 flex justify-center items-center w-[35px] h-[20px] rounded-md bg-red-primary  text-xs font-semibold'>直播</span>
      <span className='absolute top-3 right-5 flex justify-center items-center w-[35px] h-[20px] rounded-md bg-red-primary  text-xs font-semibold'>直播</span>
      <span className='absolute bottom-3 left-[50%] -translate-x-[50%] text-s font-semibold'>降價50%</span>
      <img src={imgStream} alt='banner' className='' />
    </div>
  );
};
