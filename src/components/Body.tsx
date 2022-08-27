import { Input } from './Input';
import { TodoList } from './TodoList';
import { Title } from './Title';

export const Body = () => {
  return (
    <div>
      <Title />
      <Input />
      <TodoList />
    </div>
  );
};
