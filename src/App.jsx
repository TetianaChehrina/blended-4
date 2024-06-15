import {
  Section,
  Container,
  Header,
  Text,
  TodoList,
  EditForm,
} from 'components';
import { Form } from 'components';
import { Filter } from 'components';
import { useSelector } from 'react-redux';
import { selectCurrentTodo } from 'reduxTodo/slice';

export const App = () => {
  const currentTodo = useSelector(selectCurrentTodo);
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Text textAlign="center">Create your first todo😉</Text>
          {currentTodo ? <EditForm /> : <Form />}
          <Filter />
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
