import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state);

  console.log('after', todos);
  const deleteTask = () => {
    dispatch({ type: 'DELETE', id: 'newTask' });
    console.log('before deleting', todos);
  };

  const doneTask = () => {
    dispatch({ type: 'DONE', id: 'newTask' });
    console.log('before completing', todos);
  };

  const addTodo = () => {
    dispatch({
      type: 'ADD',
      todo: { id: 'newTask', text: 'newTask', done: false },
    });
    console.log('before adding', todos);
  };
  return (
    <div className="App">
      <button onClick={addTodo}>ADD TODO</button>
      <button onClick={doneTask}>DONE NEW TASKS</button>
      <button onClick={deleteTask}>DELETE NEW TASKS</button>
    </div>
  );
}

export default App;
