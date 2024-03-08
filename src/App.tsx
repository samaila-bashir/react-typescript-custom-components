import { useRef } from 'react';
import './App.css';
import Button from './components/Button';
import Form, { type FormHandle } from './components/Form';
import Input from './components/Input';

function App() {
  // const input = useRef<HTMLInputElement>(null);
  const customForm = useRef<FormHandle>(null);

  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string; age: string };

    customForm.current?.clear();

    console.log(extractedData);
  };

  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" id="name" label="Name" />
        <Input type="number" id="number" label="Age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
