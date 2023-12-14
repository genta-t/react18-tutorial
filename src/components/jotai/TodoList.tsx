import { FormEvent } from 'react';
import { atom, useAtom } from 'jotai';
import { todosAtom } from './utils';
import { RemoveFn, TypesAtomTodo } from './types';
import Filter from './Filter';
import Filtered from './Filtered';

const TodoList = () => {
  const [ , setTodos ] = useAtom(todosAtom);
  
  const remove: RemoveFn = (todo) => setTodos(
    (p) => p.filter((item) => item !== todo)
  );

  const add = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 入力を受け取る
    const title = e.currentTarget.inputTitle.value as string;
    e.currentTarget.inputTitle.value = "";
    setTodos((p) => [
      ...p,
      atom<TypesAtomTodo>({ title, completed: false })
    ]);
  }

  return(
    <>
      <form onSubmit={add}>
        <Filter />
        <div>
          <input
            name="inputTitle"
            placeholder="Type ..."
          />
        </div>
        <Filtered remove={remove}/>
      </form>
    </>
  )
}

export default TodoList;