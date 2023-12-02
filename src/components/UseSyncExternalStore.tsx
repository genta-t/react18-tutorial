import { useSyncExternalStore } from "react";

const UseSyncExternalStore = () => {
  const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);
  console.log("todos11", todos)
  return (
    <>
      <h2>useSyncExternalStore</h2>
      <button onClick={() => todosStore.addTodo()}>追加</button>
      <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr", width: "500px"}}>
        {todos.map((t) => (
          <li key={t.id}>{t.text}</li>
        ))}
      </ul>
      <ScreenWidth />
      <hr />
    </>
  );
}

export default UseSyncExternalStore;

let nextId = 0;
let todos= [{ id: nextId++, text: "Todo #1" }];
let listeners: (() => void)[] = [];

const todosStore = {
  addTodo() {
    todos = [...todos, { id: nextId++, text: "Todo #" + nextId }]
    console.log("todos", todos)
    emitChange();
  },
  subscribe(listener: () => void) {
    listeners = [...listeners, listener]
    console.log("listeners", listeners)
    return () => {
      listeners = listeners.filter(l => l !== listener)
    };
  },
  getSnapshot() {
    return todos;
  }
}

const emitChange = () => {
  for (let listener of listeners) {
    listener();
  }
}

// 1. nextId, todos, listeners：これらはストアの状態を保持するための変数です。
// nextIdは次のTodoアイテムのIDを生成するために使用され、todosはTodoアイテムのリストを保持し、listenersはTodoリストの変更を監視するリスナーのリストを保持します。

// 2. todosStore：これはTodoリストを管理するためのオブジェクトです。
// addTodoメソッドで新しいTodoを追加し、subscribeメソッドでリスナーを追加し、getSnapshotメソッドで現在のTodoリストのスナップショットを取得します。

// 3. emitChange：これは、Todoリストが変更されたときにすべてのリスナーを呼び出す関数です。
// これにより、リスナーはTodoリストの変更を検知し、適切なアクションを実行できます。

// このコードは、Reactの新しいuseSyncExternalStoreフックを使用して、外部の状態ストアをReactコンポーネントと同期させる方法を示しています。

const ScreenWidth = () => {
  const width = useSyncExternalStore((listener) => {
    window.addEventListener("resize", listener)
    return ()  => {
      window.removeEventListener("resize", listener)
    }
  }, () => window.innerWidth)

  return <p>Size : {width}</p>
}
