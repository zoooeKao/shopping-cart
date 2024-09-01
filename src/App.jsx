import {Outlet} from 'react-router-dom';
import './App.css';

export function App() {
  // figma 購物車設計稿
  // https://www.figma.com/design/gtmlfX4TQZGPhZJsfbsTJV/%E8%B4%AD%E7%89%A9%E8%80%85-%E7%94%B5%E5%AD%90%E5%95%86%E5%8A%A1UI%E5%A5%97%E4%BB%B6-(Community)?node-id=3664-3340

  return (
    <>
      <div className='flex'>
        <Outlet />
      </div>
    </>
  );
}

export default App;
