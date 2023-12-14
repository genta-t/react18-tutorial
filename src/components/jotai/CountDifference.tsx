import { Provider, useAtom } from 'jotai';
import { countAtom, myStore } from './utils';

const CountDifference = () => {
  myStore.set(countAtom, 100);

  return(
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr"}}>
      <div>
        <Provider store={myStore}>
          <p>Provider内</p>
          <Counter />
          <Counter />
        </Provider>
      </div>
      <div>
        <p>Provider外</p>
        <Counter />
      </div>
    </div>
  )
}

export default CountDifference;

const Counter = () => {
  const [ count, setCount ] = useAtom(countAtom);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((p) => p + 1)}>
        +1
      </button>
      <button onClick={() => setCount((p) => p - 1)}>
        -1
      </button>
    </>
  )
}
