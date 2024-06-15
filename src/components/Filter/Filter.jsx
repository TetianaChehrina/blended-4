import style from './Filter.module.css';
import { selectFilter } from 'reduxTodo/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { textFilter } from 'reduxTodo/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  return (
    <input
      className={style.input}
      placeholder="Find it"
      name="filter"
      value={value}
      onChange={e => dispatch(textFilter(e.target.value))}
    />
  );
};
