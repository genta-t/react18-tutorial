import { useAtom } from 'jotai';
import { CloseOutlined } from '@ant-design/icons'
import { TypesAtomTodoItemProps, TypesFilteredProps } from './types';
import { filteredAtom } from './utils';
import { a, useTransition } from '@react-spring/web';

const Filtered = (props: TypesFilteredProps) => {
  const [todos] = useAtom(filteredAtom)
  const transitions = useTransition(todos, {
    keys: (todo) => todo.toString(),
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 40 },
    leave: { opacity: 0, height: 0 },
  }) 
  return transitions((style, atom) =>(
    <a.div className="item" style={style}>
      <TodoItem atom={atom} {...props} />
    </a.div>
  ))
}

export default Filtered;

const TodoItem = ({ atom, remove } : TypesAtomTodoItemProps) => {
  const [ item, setItem ] = useAtom(atom);
  const toggleCompleted = () => setItem(
    (todo) => ({ ...todo, completed: !todo.completed })
  );

  return(
    <>
      <input
        type="checkbox" 
        checked={item.completed}
        onChange={toggleCompleted}
      />
      <span
        style={{
          textDecoration: item.completed
          ? "line-through"
          : ""
        }}
      >
        {item.title}
      </span>
      <CloseOutlined onClick={() => remove(atom)} />
    </>
  )
}