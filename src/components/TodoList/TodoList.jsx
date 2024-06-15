import { Grid, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectToDos } from 'reduxTodo/slice';

export const TodoList = () => {
  const itemsTodos = useSelector(selectToDos);

  return (
    <>
      <Text textAlign="center">We did not find any todo😯</Text>
      <Grid>
        {itemsTodos.map((item, index) => (
          <Todo key={item.id} count={index + 1} text={item.text} id={item.id} />
        ))}
      </Grid>
    </>
  );
};
