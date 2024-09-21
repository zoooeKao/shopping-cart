import {CartItem} from '../../components/cart-item';
import {Navbar} from '../../components/nav';

export const Cart = () => {
  const myCart = new Array(13).fill({
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
    <div className='w-full h-dvh px-6 pt-8 pb-4'>
      <div className='flex justify-between items-center mb-10'>
        <div className='text-2xl font-bold'>購物車</div>
        <button className='p-2 text-gray-400 border border-gray-400 rounded-xl'>清空</button>
      </div>
      <div className='flex flex-col gap-4'>
        {myCart.map((item) => (
          <CartItem img={item.thumbnail} />
        ))}
      </div>

      <section className='h-[80px] '></section>
      <button className='fixed bottom-[70px] left-6 right-6 flex justify-center items-center h-[64px] rounded-2xl font-bold text-lg bg-black text-white'>立即結帳</button>
      <Navbar />
    </div>
  );
};
