import './todo-list.style.scss';
import ToDoItem from './todo-item';

interface Props {
  items: any[];
  handleChanged: (index: number, val: boolean) => void;
}

export default function ToDoList({ items, handleChanged }: Props) {
  return (
    <div>
      {items.map((it, index) => (
        <ToDoItem
          key={`todo-item-${index}`}
          text={it.text}
          done={it.done}
          onChange={(val: boolean) => {
            handleChanged(it.id, val);
          }}
        />
      ))}
    </div>
  );
}
