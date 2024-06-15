import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import { selectCurrentTodo } from 'reduxTodo/slice';
import style from './EditForm.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addCurrentTodo, changeTodos } from 'reduxTodo/slice';

export const EditForm = () => {
  const { text } = useSelector(selectCurrentTodo);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.text.value.trim();
    dispatch(changeTodos(input));
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={text}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button
        className={style.editButton}
        type="button"
        onClick={() => dispatch(addCurrentTodo(null))}
      >
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
