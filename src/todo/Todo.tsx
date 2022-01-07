import React from "react";

import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export interface TodoItemProps {
  id: string | number;
  title: string;
  status: boolean;
}

const Todo = () => {
  const [todos, setTodos] = React.useState<TodoItemProps[]>([]);

  const handleAdd = (text: string) => {
    const payload = {
      id: todos.length + 1,
      title: text,
      status: false,
    };

    setTodos([...todos, payload]);
  };

  const handleDelete = (id: string | number) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleToggle = (id: string | number) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };

  const handleEdit = (id: string | number, text: string) => {
    setTodos(
      todos.map((item) => (item.id === id ? { ...item, title: text } : item))
    );
  };

  return (
    <div>
      <h2>Todo</h2>
      <div>
        <TodoInput onSubmit={handleAdd} />
      </div>
      <div>
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            data={item}
            onDelete={handleDelete}
            onToggle={handleToggle}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
