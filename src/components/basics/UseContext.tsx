import { useContext } from "react";
import { ContainerDataContext } from "../..";

//useContextはログイン情報を共有したい時にどのコンポーネントでも使えるようにするためにindex.tsxにcreateContext書く

const UseContext = () => {
  const containerData = useContext(ContainerDataContext);
  
  return (
    <>
      <h2>useContext</h2>
      <p>{containerData.name}</p>
      <p>{containerData.age}</p>
      <p>{containerData.text}</p>
      <hr />
    </>
  );
}

export default UseContext;
