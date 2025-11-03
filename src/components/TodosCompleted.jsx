import { useState } from 'react';
import { initialTodos, createTodo } from './todos.jsx';

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);

  const completeCount = todos.filter(item=> !item.completed)
  const activeTodos = showActive ? completeCount : todos;

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={showActive}
          onChange={e => setShowActive(e.target.checked)}
        />
        Show only active todos
      </label>
      <NewTodo  onAdd={newTodo => setTodos([...todos, newTodo])} />
      <ul>
        {activeTodos.map(todo => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
      <footer>
        {completeCount.length} todos left
      </footer>
    </>
  );
}

function NewTodo({ onAdd }) {
  const [text, setText] = useState('');

  function handleAddClick() {
    setText('');
    onAdd(createTodo(text));
  }

  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleAddClick}>
        Add
      </button>
    </>
  );
}
