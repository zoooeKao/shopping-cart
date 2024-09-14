import {createBrowserRouter} from 'react-router-dom';
import {App} from './App.jsx';
import {EmptyCart} from './page/cart/empty-cart.jsx';
import {Cart} from './page/cart/index.jsx';
import {LoginForm} from './page/login-form/index.jsx';
import {loader, Main} from './page/main/index.jsx';
import {SearchIndexPage} from './page/search/search-index-page.jsx';
import {SearchMainPage} from './page/search/search-main-page.jsx';
import {SearchProductDescription} from './page/search/search-product-description.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Main />,
        loader: loader,
      },
      {
        path: 'login',
        element: <LoginForm />,
        // loader: loader,
      },
      {
        path: 'search',
        element: <SearchIndexPage />,
      },
      {
        path: 'search-main',
        element: <SearchMainPage />,
      },
      {
        path: 'search-product',
        element: <SearchProductDescription />,
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
        element: <EmptyCart />,
      },
    ],
  },
]);

// Question: 更新購物車商品數量要用什麼方法 post? put?
