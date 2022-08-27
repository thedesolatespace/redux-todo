import { createStore } from 'redux';
export enum ActionTypes {
  ADD = 'ADD',
  DONE = 'DONE',
  DELETE = 'DELETE',
}

type TodoActions =
  | { type: ActionTypes.ADD; todo: TodoListInterface }
  | { type: ActionTypes.DELETE; id: string }
  | { type: ActionTypes.DONE; id: string };

export interface TodoListInterface {
  id: string;
  done: boolean;
  text: string;
}

const initialState: TodoListInterface[] = [];

export const todoReducer = (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case ActionTypes.ADD:
      return [...state, action.todo];
    case ActionTypes.DELETE:
      return state.filter((todo) => todo.id !== action.id);
    case ActionTypes.DONE:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
};

export const store = createStore(todoReducer);
