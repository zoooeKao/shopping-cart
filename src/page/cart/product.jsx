import {ArrowLeftIcon, HeartIcon, PlusCircleIcon, ShareIcon} from '@heroicons/react/24/outline';

export const Product = ({}) => {
  return (
    <body className='w-full h-dvh px-6'>
      <header className='flex justify-between mt-8'>
        <div>
          <ArrowLeftIcon className='size-5' />
        </div>
        <div className='flex gap-3'>
          <ShareIcon className='size-5' />
          <HeartIcon className='size-5' />
        </div>
      </header>
      <main>
        <img src='https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png'></img>
        <div>Essence Mascara Lash Princess</div>
        <span>9.99</span>
        <div>The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.</div>
      </main>

      <section className='mt-10 h-[62px] w-full' data-desc='empty-space-under-nav' />
      <nav className='fixed bottom-0 left-0 right-0 flex justify-evenly items-center mt-10 h-[62px] w-full rounded-t-3xl text-white bg-slate-400'>
        <button className='flex justify-center items-center size-10 rounded-full bg-teal-400'>
          <PlusCircleIcon className='size-6' />
        </button>
        <button className='flex justify-center items-center w-10 h-10 rounded-full bg-teal-400'></button>
      </nav>
    </body>
  );
};

//   // TODO: 接 API
//   const categories = new Array(11).fill({product: '照相機', price: 100});

//   return (
//     <div className={`grid ${layout} ${flow} gap-3`}>
//       {categories.map(({product, price}) => (
//         <Category product={product} price={price} />
//       ))}
//     </div>
//   );
// };

// import {CartItem} from '../../components/cart-item';
// import {Navbar} from '../../components/nav';

// export const Cart = () => {
//   const myCart = new Array(3).fill({
//     title: 'Essence Mascara Lash Princess',
//     brand: 'Essence',
//     category: 'beauty',
//     discountPercentage: 7.17,
//     images: ['https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png'],
//     price: 9.99,
//     rating: 4.94,
//     stock: 5,
//     availabilityStatus: 'Low Stock',
//     tags: ['beauty', 'mascara'],
//     thumbnail: 'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png',
//     weight: 2,
//   });

//   return (
//     <div className='w-full h-dvh px-6 mt-8 mb-4'>
//       <div className='mb-10 text-2xl font-bold'>購物車</div>
//       {myCart.map((item) => (
//         <CartItem img={item.thumbnail} />
//       ))}
//       <button className='fixed bottom-[82px] left-6 right-6 flex justify-center items-center h-[64px] rounded-2xl font-bold text-lg bg-black text-white'>立即結帳</button>
//       <Navbar />
//     </div>
//   );
// };

// import {ArrowLeftIcon, HeartIcon, ShareIcon} from '@heroicons/react/24/outline';
// import {PlusCircleIcon} from '@heroicons/react/24/solid';

// export const SearchProductDescription = ({}) => {
//   return (
//     <body className='w-full h-dvh px-6 mt-8 mb-4'>
//       <header className='flex justify-between'>
//         <div>
//           <ArrowLeftIcon className='size-5' />
//         </div>
//         <div className='flex gap-3'>
//           <ShareIcon className='size-5' />
//           <HeartIcon className='size-5' />
//         </div>
//       </header>

//       <main>
//         {/* TODO: lazy loading */}
//         <img src='https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png' className='mt-[35px]' />
//         <div className='text-[22px] leading-7 font-black'>Essence Mascara Lash Princess</div>
//         <div className='mt-2 text-green-primary leading-6 font-medium'>$9.99</div>
//         <div className='mt-3 text-balance'>The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.</div>
//       </main>

//       <section className='mt-10 h-[62px] w-full' data-desc='empty-space-under-nav' />
//       <nav className='mt-10 mb-[30px] px-6 fixed bottom-0 left-0 right-0 flex justify-between items-center gap-5 h-[62px] w-full rounded-t-3xl text-white '>
//         <button type='button' className='w-1/6 h-full rounded-full text-white'>
//           <PlusCircleIcon className='rounded-full border-transparent text-black' />
//         </button>
//         <button className='w-5/6 h-full flex justify-center items-center rounded-full font-bold text-lg bg-teal-400'>立即結帳</button>
//       </nav>
//     </body>
//   );
// };
