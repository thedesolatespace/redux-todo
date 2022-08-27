import { List } from '@mui/material';
import { useSelector } from 'react-redux';
import { TodoListInterface } from '../store';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const todos = useSelector((state: TodoListInterface[]) => state);
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </List>
  );
};
