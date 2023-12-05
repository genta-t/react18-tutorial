import { useState } from "react";
import { useFetch } from "./useFetch";



const FetchComp = () => {
  const [ id, setId ] = useState(1);
  const { loading, error, value } = useFetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {},
    [id]
  )

  return (
    <>
      <h2>Fetch</h2>
      <p>{id}</p>
      <button onClick={() => setId(cId => cId +1)}>カレントID</button>
      <p>Loading: {loading.toString()}</p>
      <p>{JSON.stringify(error, null, 2)}</p>
      <p>{JSON.stringify(value, null, 2)}</p>
      <hr />
    </>
  )
}

export default FetchComp;