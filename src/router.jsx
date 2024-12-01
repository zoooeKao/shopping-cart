import {createBrowserRouter} from 'react-router-dom';
import {App} from './App.jsx';
import {Account, accountLoader} from './page/account/index.jsx';
import {Cart, getMyCartLoader} from './page/cart/index.jsx';
import {LoginForm} from './page/login-form/index.jsx';
import {HomePage, homePageLoader} from './page/main/index.jsx';
import {Order, orderLoader} from './page/order/index.jsx';
import {ProductDescription} from './page/product-description/index.jsx';
import {ProductsLists, productsListsLoader} from './page/products-lists/index.jsx';
import {SearchFilter, searchFilterLoader} from './page/search-filter/index.jsx';
import {SearchPage, searchLoader} from './page/search/index.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'login',
        element: <LoginForm />,
      },
      {
        path: '',
        element: <HomePage />,
        loader: homePageLoader,
      },
      {
        path: 'search',
        element: <SearchPage />,
        loader: searchLoader,
      },
      {
        path: 'products-lists',
        element: <ProductsLists />,
        loader: productsListsLoader,
      },
      {
        path: 'search-filter',
        element: <SearchFilter />,
        loader: searchFilterLoader,
      },
      {
        path: 'product-description',
        element: <ProductDescription />,
      },
      {
        path: 'cart',
        element: <Cart />,
        loader: getMyCartLoader,
      },
      {
        path: 'order',
        element: <Order />,
        loader: orderLoader,
      },
      {
        path: 'account',
        element: <Account />,
        loader: accountLoader,
      },
    ],
  },
]);
