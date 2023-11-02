import { useState } from 'react';

interface Props {
  onInput: (str: string) => void;
}

const InputBox = ({ onInput }: Props) => {
  const [text, setText] = useState('');

  const handleAddItem = () => {
    if (text) {
      onInput(text);
      setText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            handleAddItem();
          }
        }}
        onChange={e => {
          setText(e.target.value);
        }}
      />
      <button
        type="button"
        disabled={text.length === 0}
        onClick={e => {
          e.stopPropagation();
          handleAddItem();
        }}
      >
        Add
      </button>
    </div>
  );
};

export default InputBox;
