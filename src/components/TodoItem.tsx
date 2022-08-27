import { ListItem } from '@mui/material';
import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { ActionTypes, TodoListInterface } from '../store';

export const TodoItem = ({ text, done, id }: TodoListInterface) => {
  const dispatch = useDispatch();

  const deletionHandler = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch({ type: ActionTypes.DELETE, id: e.currentTarget.id });
  };

  const completionHandler = (e: MouseEvent<HTMLElement>) => {
    dispatch({ type: ActionTypes.DONE, id: e.currentTarget.id });
  };

  return (
    <ListItem
      divider={true}
      id={id}
      onClick={completionHandler}
      onContextMenu={deletionHandler}
      sx={done ? { textDecoration: 'line-through 1px black' } : {}}
    >
      {text}
    </ListItem>
  );
};
