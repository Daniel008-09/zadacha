import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleImportant, startEditing, saveEditing, cancelEditing } from '../features/todos/todoSlice';

const ToDoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');
  const [editValue, setEditValue] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  const handleSaveEdit = (id) => {
    dispatch(saveEditing({ id, text: editValue }));
    setEditValue('');
  };

  return (
    <div className="todo-container">
      <div className="input-group">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Добавить задачу"
        />
        <button onClick={handleAddTodo}>Добавить</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.isImportant ? 'important' : ''}>
            {todo.isEditing ? (
              <div>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  placeholder="Изменить задачу"
                />
                <button onClick={() => handleSaveEdit(todo.id)}>Сохранить</button>
                <button onClick={() => dispatch(cancelEditing(todo.id))}>Отмена</button>
              </div>
            ) : (
              <div>
                <span>{todo.text}</span>
                <button onClick={() => dispatch(startEditing(todo.id))}>Изменить</button>
                <button onClick={() => dispatch(deleteTodo(todo.id))}>Удалить</button>
                <button onClick={() => dispatch(toggleImportant(todo.id))}>
                  {todo.isImportant ? 'Не важная' : 'Важная'}
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
