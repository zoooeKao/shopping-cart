import {useState} from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);
  // figma 購物車設計稿
  // https://www.figma.com/design/gtmlfX4TQZGPhZJsfbsTJV/%E8%B4%AD%E7%89%A9%E8%80%85-%E7%94%B5%E5%AD%90%E5%95%86%E5%8A%A1UI%E5%A5%97%E4%BB%B6-(Community)?node-id=3664-3340

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2 class='font-black'>test</h2>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
