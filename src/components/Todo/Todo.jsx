import { GridItem, Text } from 'components';
import style from './Todo.module.css';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteTodos } from 'reduxTodo/slice';

export const Todo = ({ text, count, id }) => {
  const dispatch = useDispatch();

  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO # {count}
        </Text>

        <Text>{text}</Text>
        <button
          className={style.deleteButton}
          onClick={() => dispatch(deleteTodos(id))}
          type="button"
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button className={style.editButton} type="button">
          <RiEdit2Line size={24} />
        </button>
      </div>
    </GridItem>
  );
};
