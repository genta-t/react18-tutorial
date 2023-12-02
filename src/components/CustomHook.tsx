import useLocalStorageAge from "./items/useLocalStorageAge";

// 自作でhookが作れる

const CustomHook = () => {
  const [ age, setAge ] = useLocalStorageAge("age", 28);
  
  return (
    <>
      <h2>CustomHook</h2>
      <p>{age}</p>
      <button onClick={() => setAge(80)}>age</button>
      <hr />
    </>
  );
}

export default CustomHook;