import {createBrowserRouter} from 'react-router-dom';
import {App} from './App.jsx';
import {EmptyCart} from './page/cart/empty-cart.jsx';
import {Cart} from './page/cart/index.jsx';
import {LoginForm} from './page/login-form/index.jsx';
import {HomePage, homePageLoader} from './page/main/index.jsx';
import {EmptyOrder} from './page/order/empty-order.jsx';
import {ProductDescription} from './page/product-description/index.jsx';
import {SearchFilter, searchFilterLoader} from './page/search-filter/index.jsx';
import {SearchResult, searchResultLoader} from './page/search-result/index.jsx';
import {SearchPage, searchLoader} from './page/search/index.jsx';
import {Test, testLoader} from './page/test/test.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: 'test', element: <Test />, loader: testLoader},
      {
        path: '',
        element: <HomePage />,
        loader: homePageLoader,
      },
      {
        path: 'login',
        element: <LoginForm />,
      },
      {
        path: 'search',
        element: <SearchPage />,
        loader: searchLoader,
      },
      {
        path: 'search-result',
        element: <SearchResult />,
        loader: searchResultLoader,
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
      },
      {
        path: 'empty-cart',
        element: <EmptyCart />,
      },
      {
        path: 'empty-order',
        element: <EmptyOrder />,
      },
    ],
  },
]);

// Question: 更新購物車商品數量要用什麼方法 post? put?  put
// Code review: container 分層
