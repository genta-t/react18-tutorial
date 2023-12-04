import { useSessionStorage } from "./useStorage";


const StorageComp = () => {
  const [ name, setName, removeName ] = useSessionStorage("name", "かいる");
  const [ age, setAge, removeAge ] = useSessionStorage("age", 26);

  const handleName = () => {
    setName(name === "かいる" ? "じょん" : "かいる")
  }

  return (
    <>
      <h2>Storage</h2>
      <p>{name} - {age}</p>
      <button onClick={handleName}>名前セット</button>
      <button onClick={() => setAge(40)}>年齢セット</button>
      <button onClick={removeName}>消す名前</button>
      <button onClick={removeAge}>消す年齢</button>
      <hr />
    </>
  )
}

export default StorageComp;