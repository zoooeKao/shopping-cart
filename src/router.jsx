import {createBrowserRouter} from 'react-router-dom';
import {App} from './App.jsx';
import {LoginForm, loader} from './page/login-form/index.jsx';
import {Main} from './page/main/index.jsx';
import {SearchIndexPage} from './page/search/search-index-page.jsx';
import {SearchMainPage} from './page/search/search-main-page.jsx';
// import {HomePage, loader} from './page/main/index.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <LoginForm />,
        loader: loader,
      },
      {
        path: 'main',
        element: <Main />,
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
    ],
  },
]);

// Q1: 一個網頁有多個 body 和 main 標籤合理嗎
