import { useRef, useState } from "react";
import { useAutoResize } from "./useRef/hooks";

// inputやtextareaタグの情報(タグのサイズなど)やテキストの情報が取れる。

const UseRef = () => {
  // 入力した内容を一覧として管理
  const [ items, setItems ] = useState<string[]>([]);
  const [ value, setValue ] = useState<string>("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setItems([...items, value]);
    setValue("");
  }

  // textareaへ文字が入力されたときに発火させる関数
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  }

  // textarea要素の高さを動的に調整するためのカスタムフック
  const textareaRef = useAutoResize(value);
  
  return (
    <>
      <h2>useRef</h2>
      {items.length === 0 ? (
        <p>何か書いて</p>
      ):(
        <ul>
          {items.map((item, i) => {
            return <li key={i}>{item}</li>
          })}
        </ul>
      )}
      <form onSubmit={(e) => handleSubmit(e)}>
        <textarea 
          value={value}
          onChange={(e) => handleChange(e)}
          ref={textareaRef}
        />
        <button>送信</button>
      </form>
      <hr />
    </>
  );
}

export default UseRef;
