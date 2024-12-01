import { useAtom } from 'jotai';
import { theme } from '../../model/jotai/atom';
import { delCart } from '../../service/service';

export const testLoader = async () => {
  console.log('from test');
  // await login('emilys', 'emilyspass');
  // await login('carterb', 'carterbpass');
  // await getUserProfile();
  // await getUserCart();
  // const autoCompleteList = await getAutoCompleteList();
  // const allProduct = await getAllProduct();
  // const detail = await getProductDetail(1);
  // await getSearchProduct('keyword=long-lasting');
  // const userProfile = await getUserProfile();
  // const myCart = await getMyCart();
  // const userCart = await getMyCart();
  // const putCart = await updateCart(21, [20, 20, 20]);
  const deleteCart = await delCart(21);
  // const updateCart = await updateCart(1,{products: []});
  return {deleteCart};
};

export const Test = () => {
  const [appTheme, setAppTheme] = useAtom(theme);
  // const {deleteCart} = useLoaderData();
  // console.log('deleteCart', deleteCart);
  // console.log('userCart', userCart, 'deleteCart', deleteCart);
  // console.log('appTheme', appTheme);
  return (
    // <div className={`${appTheme === 'color' ? 'bg-red-500' : 'bg-white'}`}>
    <div className={appTheme ? 'bg-red-500' : 'bg-white'}>
      <button
        onClick={() => {
          setAppTheme(!appTheme);
        }}>
        切換背景色
      </button>
    </div>
  );
};
