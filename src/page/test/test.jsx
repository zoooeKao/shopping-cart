import {CursorArrowRaysIcon} from '@heroicons/react/24/outline';
import {useLoaderData} from 'react-router-dom';
import {getAllProduct, getAutoCompleteList, getSearchProduct} from '../../service/service';

export const testLoader = async () => {
  console.log('from test');
  // await login('emilys', 'emilyspass');
  // await login('carterb', 'carterbpass');
  // await getUserProfile();
  // await getUserCart();
  const autoCompleteList = await getAutoCompleteList();
  const allProduct = await getAllProduct();
  // await getProductDetail(1);
  await getSearchProduct('maxPrice');
  return allProduct;
};

export const Test = () => {
  const products = useLoaderData();
  console.log('pro', products);
  return (
    <>
      <CursorArrowRaysIcon className='size-11 text-red-500' />
    </>
  );
};

// A-1
// path:'/'  element:<HomePage />
// user click brand
// 將結果儲存到網址 -> /search-result?brand=brand
// <Link to=B>

// A-2
// path:'search'   <SearchPage />
// user click category
// 將結果儲存到網址 -> /search-result?category=category
// <Link to=B>

// B
// path:'search-result'   element:<ProductList />
// 1) 解析 query string (/search-result?key=value&key1=value1&key2=value2);
// const queryEntries = new URLSearchParams(window.location.search);
// const queryKeysArr = Array.from(queryEntries.keys());
//
// 2) 去除重複的 key
// 找到重複的值
// const dupArr = queryKeysArr.filter((item, index) => queryKeysArr.indexOf(item) !== index);
// 將URL重複的值去掉
// for (const key of dupArr) {
//   queryEntries.delete(key)
// }
//
// 3) 驗證 key 是否為 RequestQuery 之一
// const apiKeys = ['keyword', 'brand', 'category', 'minPrice', 'maxPrice', 'minDiscount', 'maxDiscount', 'minRating', 'maxRating']
// queryKeysArr.every((key) => apiKeys.includes(key))
//
// 4) 打 API /api/product?key=value 取回 products []
// 5) 將 products 渲染至 productCard
