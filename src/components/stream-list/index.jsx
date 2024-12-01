/**
 * @type {React.FC}
 */
export const Streams = () => {
  const streamsList = new Array(5).fill([]);

  return (
    <div className='flex gap-3'>
      {streamsList.map((_, i) => (
        <div
          key={i}
          className='relative shrink-0 w-[154px] h-[208px] rounded-3xl text-white'>
          <span className='absolute top-3 left-5 flex justify-center items-center w-[40px] h-[25px] rounded-md bg-red-primary text-xs font-semibold'>Live</span>
          <span className='absolute top-3 right-5 flex justify-center items-center w-[40px] h-[25px] rounded-md bg-black text-xs font-semibold'>
            <img
              src='img-stream/viewer.png'
              alt='viewer'
              className='size-[10px]'
            />
            2,3K
          </span>
          <span className='absolute bottom-3 left-[50%] -translate-x-[50%] text-s font-semibold'>降價50%</span>
          <img
            src='img-stream/stream.png'
            alt='banner'
          />
        </div>
      ))}
    </div>
  );
};
