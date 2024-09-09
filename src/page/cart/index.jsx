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

import {CartItem} from '../../components/cart-item';
import {Navbar} from '../../components/nav';

export const Cart = () => {
  const myCart = new Array(3).fill({
    title: 'Essence Mascara Lash Princess',
    brand: 'Essence',
    category: 'beauty',
    discountPercentage: 7.17,
    images: ['https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png'],
    price: 9.99,
    rating: 4.94,
    stock: 5,
    availabilityStatus: 'Low Stock',
    tags: ['beauty', 'mascara'],
    thumbnail: 'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png',
    weight: 2,
  });

  return (
    // Question: 為什麼會有垂直卷軸
    <div className='w-full h-dvh px-6 mt-8 mb-4'>
      <div className='mb-10 text-2xl font-bold'>購物車</div>
      <div className='flex flex-col gap-4'>
        {myCart.map((item) => (
          <CartItem img={item.thumbnail} />
        ))}
      </div>
      <button className='fixed bottom-[82px] left-6 right-6 flex justify-center items-center h-[64px] rounded-2xl font-bold text-lg bg-black text-white'>立即結帳</button>
      <Navbar />
    </div>
  );
};
