import { useRef } from "react";

// inputやtextareaタグの情報(タグのサイズなど)やテキストの情報が取れる。

const UseRef = () => {
  const ref = useRef<HTMLInputElement | null>(null);
  const handleRef = () => {
    console.log(ref.current?.value);
  };
  
  return (
    <>
      <h2>useRef</h2>
      <input type="text" ref={ref}/>
      <button onClick={handleRef}>useRef</button>
      <hr />
    </>
  );
}

export default UseRef;
