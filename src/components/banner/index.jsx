/**
 *
 * @type {React.FC}
 */
export const Banner = () => {
  return (
    <div className='w-full h-[215px]  bg-main flex flex-col justify-end items-center gap-3 rounded-b-3xl'>
      <div className=' w-11/12 h-2/3 bg-teal-500 rounded-3xl  font-black  '>
        <div className='flex justify-center items-center relative'>
          <img src='src\assets\img-banner\shape\image1.png' className='w-[170px] top-1/5 left-[10px] absolute' alt='' />
          <img src='src\assets\img-banner\shape\image2.png' className='w-1/2 z-10' style={{transform: 'scaleX(-1)'}} alt='' />
          <img src='src\assets\img-banner\shape\image3.png' className='h-5/6 absolute right-[25px] bottom-5' alt='' />
          <img src='src\assets\img-banner\shape\image4.png' className='size-24 absolute top-[-50px] left-1/2' alt='' />
          <img src='src\assets\img-banner\shape\image5.png' className='size-20 absolute top-[25px] right-[80px]' alt='' />
          <img src='src\assets\img-banner\shape\image6.png' className='size-20 absolute top-[-50px] left-1/4' alt='' />
          <img src='src\assets\img-banner\pattern\ellipse786.png' className='absolute size-5 left-[50px] top-[-30px]' alt='' />
          <img src='src\assets\img-banner\pattern\polygon3.png' className='absolute size-5 right-0 top-[-20px]' alt='' />
          <img src='src\assets\img-banner\pattern\vector.png' className='absolute size-4 left-6 bottom-12' alt='' />
          <img src='src\assets\img-banner\pattern\vetor(stroke).png' className='absolute size-6 right-[-15px] -rotate-12' alt='' />
        </div>
      </div>
      <div className='mb-3 flex gap-1'>
        <svg width='16' height='3' viewBox='0 0 16 3' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M0 1.5C0 0.671573 0.671573 0 1.5 0H14.5C15.3284 0 16 0.671573 16 1.5C16 2.32843 15.3284 3 14.5 3H1.5C0.671573 3 0 2.32843 0 1.5Z' fill='white' />
        </svg>

        <svg width='6' height='3' viewBox='0 0 6 3' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path opacity='0.3' d='M0 1.5C0 0.671573 0.671573 0 1.5 0H4.5C5.32843 0 6 0.671573 6 1.5C6 2.32843 5.32843 3 4.5 3H1.5C0.671573 3 0 2.32843 0 1.5Z' fill='white' />
        </svg>

        <svg width='6' height='3' viewBox='0 0 6 3' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path opacity='0.3' d='M0 1.5C0 0.671573 0.671573 0 1.5 0H4.5C5.32843 0 6 0.671573 6 1.5C6 2.32843 5.32843 3 4.5 3H1.5C0.671573 3 0 2.32843 0 1.5Z' fill='white' />
        </svg>
      </div>
    </div>
  );
};
