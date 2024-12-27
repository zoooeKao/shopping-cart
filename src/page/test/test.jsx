import {useRouteLoaderData} from 'react-router-dom';
import {getUserProfile} from '../../service/service';

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
  const userProfile = await getUserProfile();
  // const myCart = await getMyCart();
  // const userCart = await getMyCart();
  // const putCart = await updateCart(21, [20, 20, 20]);
  // const deleteCart = await delCart(21);
  // const updateCart = await updateCart(1,{products: []});
  return {userProfile};
};

export const Test = () => {
  const {profileData} = useRouteLoaderData('app');
  // console.log('deleteCart', deleteCart);
  // console.log('userCart', userCart, 'deleteCart', deleteCart);
  // console.log('appTheme', appTheme);
  return (
    <div>{profileData.firstName}</div>
    // <div className={`${appTheme === 'color' ? 'bg-red-500' : 'bg-white'}`}>
  );
};
