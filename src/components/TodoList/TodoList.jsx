import { Grid, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectToDos } from 'reduxTodo/slice';
import { selectFilter } from 'reduxTodo/filterSlice';

export const TodoList = () => {
  const itemsTodos = useSelector(selectToDos);
  const filter = useSelector(selectFilter);

  const handleFilter = () => {
    return itemsTodos.filter(todo =>
      todo.text.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  return (
    <>
      <Text textAlign="center">We did not find any todo😯</Text>
      <Grid>
        {handleFilter().map((item, index) => (
          <Todo key={item.id} count={index + 1} text={item.text} id={item.id} />
        ))}
      </Grid>
    </>
  );
};
