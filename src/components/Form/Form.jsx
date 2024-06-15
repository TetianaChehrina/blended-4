import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';
import { addTodos } from 'reduxTodo/slice';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

export const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.search.value.trim();
    dispatch(addTodos({ text: input, id: nanoid() }));
    form.reset();
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
