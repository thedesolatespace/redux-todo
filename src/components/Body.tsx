import { Input } from './Input';
import { TodoList } from './TodoList';
import { Title } from './Title';
import { StyledBody } from './Body.styled';

export const Body = () => {
  return (
    <StyledBody>
      <Title />
      <Input />
      <TodoList />
    </StyledBody>
  );
};
