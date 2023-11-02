import { useState } from 'react';
import InputBox from 'components/input-box';
import ToDoList from 'components/todo-list';

import './App.css';

function App() {
  const [items, setItems] = useState<
    { id: number; text: string; done: boolean }[]
  >([]);

  const handleChanged = (id: number, val: boolean) => {
    setItems(prev =>
      prev.map(pv => {
        if (pv.id === id) return { ...pv, done: val };
        return pv;
      }),
    );
  };

  return (
    <div className="main-container">
      <InputBox
        onInput={(str: string) => {
          if (str) {
            setItems(prev => [
              ...prev,
              { id: prev.length, text: str, done: false },
            ]);
          }
        }}
      />
      <ToDoList items={items} handleChanged={handleChanged} />
    </div>
  );
}

export default App;
