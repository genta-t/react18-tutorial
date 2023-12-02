import { useId } from "react";

const UseId = () => {

  return (
    <>
      <h2>UseId</h2>
      <InputForm />
      <article style={{ width: "50%" }}>
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        <br />
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        <br />
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        <br />
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        <br />
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      </article>
      <InputForm />
      <hr />
    </>
  );
}

export default UseId;


// 同じフォームが複数ある場合はランダムidで割り振ることがあったが、
// useIdを使うとリロードしても同じ一意のidが割り振られる。
const InputForm = () => {
  const nameId = useId();
  return (
    <>
      <label htmlFor={nameId}>Name</label>
      <input type="text" id={nameId} />
    </>
  )
}
