import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { TextValue, addTodos, removeTodo, toggleValue, fechTodos } from './store/todoSlice';
import { useEffect } from 'react';

function App() {
  const { textVal, todos } = useSelector((state) => state.sliceTodos);
  const dispatch = useDispatch();
  console.log(todos);
  useEffect(() => {
    dispatch(fechTodos());
  }, [dispatch]);

  return (
    <div>
      <input type='text' onChange={(e) => dispatch(TextValue(e.target.value))} value={textVal} />
      <button onClick={() => dispatch(addTodos())}>доавить</button>
      <hr />
      <ul className='todos_container'>
        {todos &&
          todos.map((elem) => (
            <div key={elem.id} className='todo_container'>
              <li>
                <input
                  type='checkbox'
                  name=''
                  checked={elem.complited}
                  className='chekVal'
                  onChange={() => dispatch(toggleValue(elem.id))}
                />
                <span>{elem.title} </span>
                <button type='button' onClick={() => dispatch(removeTodo(elem.id))}>
                  удалить
                </button>
              </li>
            </div>
          ))}
      </ul>
    </div>
  );
}

export default App;
