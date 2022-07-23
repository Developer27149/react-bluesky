import { AiOutlineAlibaba } from 'react-icons/ai';
import { MdiAlphaLCircleOutline } from './components/icons';
import reactLogo from './assets/react.svg';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="p-4 bg-purple-500 text-xl">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((prevCount) => prevCount + 1)}>
          count is {count}
        </button>
        <div className=" i-mdi-airplane-settings text-red-500" />
        <div className="i-mdi-airplane-settings " style={{ color: 'green' }} />
        <MdiAlphaLCircleOutline className="text-yellow-200" />
        <p className="text-red-500">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <AiOutlineAlibaba className="text-red-700 " />
      <p className="text-red-200">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
