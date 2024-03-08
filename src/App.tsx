import { useRef } from 'react';
import './App.css';
import Input from './components/Input';

function App() {
  const input = useRef<HTMLInputElement>(null);

  return (
    <main>
      <Input id="name" label="Name" ref={input} />
    </main>
  );
}

export default App;
