import { useEffect, useState } from 'react';
import reactLogo from '@/shared/assets/images/react.svg';
import viteLogo from '/vite.svg';
import './index.css';

export function Index() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    fetch('/api')
      .then(res => res.text())
      .then(setText);
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img alt="Vite logo" className="logo" src={viteLogo} />
        </a>
        <a href="https://react.dev" target="_blank">
          <img alt="React logo" className="logo react" src={reactLogo} />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>{text}</p>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is
          {' '}
          {count}
        </button>
        <p>
          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
