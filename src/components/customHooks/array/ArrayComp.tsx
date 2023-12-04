import { useArray } from "./useArray";

const ArrayComp = () => {
  const { array, set, push, filter, update, remove, clear} = useArray([
    1, 2, 3, 4, 5, 6
  ])

  return (
    <>
      <h2>Array</h2>
      <p>{array.join(", ")}</p>
      <button onClick={() => push(7)}>７追加</button>
      <button onClick={() => update(1, 9)}>2 番目の要素を9に変更します</button>
      <button onClick={() => remove(1)}>2番目の要素を削除</button>
      <button onClick={() => filter(n => n < 3)}>数字は4未満にしてください</button>
      <button onClick={() => set([1,2])}>1と2セット</button>
      <button onClick={() => clear()}>クリア</button>
      <hr />
    </>
  )
}

export default ArrayComp;