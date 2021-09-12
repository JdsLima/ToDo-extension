import { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCalendar2Line, RiCloseCircleLine } from 'react-icons/ri';
import { AiOutlineClockCircle } from 'react-icons/ai'
import { TiEdit } from 'react-icons/ti';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <div className="todo-container">
      {todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
          <div className="todo-wrapper">
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
              <p>{todo.text}</p>
            </div>

            <div className='icons'>
              <RiCloseCircleLine
                onClick={() => removeTodo(todo.id)}
                className='delete-icon'
              />

              <TiEdit
                onClick={() => setEdit({ id: todo.id, value: todo.text })}
                className='edit-icon'
              />
            </div>
          </div>
          <div className="todo-wrapper">
            <div>
              <RiCalendar2Line className='calendar-icon' />
              <span>{todo.date.split(" ")[0]}</span>
            </div>
            <div>
              <AiOutlineClockCircle className="calendar-icon" />
              <span>{todo.date.split(" ")[1]}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
