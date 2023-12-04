import { useAsync } from "./useAsync";


const AsyncComp = () => {
  const { loading, error, value } = useAsync(() => {
    return new Promise((resolve, reject) => {
      const success = false;
      setTimeout(() => {
        success ? resolve("はい") : reject("エラー");
      }, 5000);
    })
  })

  return (
    <>
      <h2>Array</h2>
      <p>Loading: {loading.toString()}</p>
      <p>{error}</p>
      <p>{value}</p>
      <hr />
    </>
  )
}

export default AsyncComp;