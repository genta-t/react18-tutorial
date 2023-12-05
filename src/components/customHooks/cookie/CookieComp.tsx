import { useCookie } from "./useCookie";

const CookieComp = () => {
  const [ value, update, remove ] = useCookie("name", "じょん");
  return (
    <>
      <h2>clickOutside</h2>
      <p>{value}</p>
      <button onClick={() => update("さりー")}>名前をさりーに変えます。</button>
      <button onClick={remove}>名前消す</button>
      <hr />
    </>
  )
}

export default CookieComp;