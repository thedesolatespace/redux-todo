import { OutlinedInput } from '@mui/material';
import { nanoid } from 'nanoid';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ActionTypes } from '../store';

export const Input = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const submitTodoHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim()) {
      dispatch({
        type: ActionTypes.ADD,
        todo: { id: nanoid(), done: false, text: value },
      });
    }
    setValue('');
  };

  const inputChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    return setValue(e.currentTarget.value);
  };

  return (
    <form onSubmit={submitTodoHandler}>
      <OutlinedInput
        fullWidth={true}
        value={value}
        onChange={inputChangeHandler}
      />
    </form>
  );
};
