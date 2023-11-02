const ToDoItem = ({
  text,
  done,
  onChange,
}: {
  text: string;
  done: boolean;
  onChange: (val: boolean) => void;
}) => {
  return (
    <div
      className="todo-item-container"
      style={done ? { textDecoration: 'line-through' } : {}}
    >
      <input
        type="checkbox"
        checked={done}
        onChange={e => {
          onChange(e.target.checked);
        }}
      />
      <div>{text}</div>
    </div>
  );
};

export default ToDoItem;
