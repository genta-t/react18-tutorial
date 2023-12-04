import { useMemo, useState } from "react";
import { TypesForm } from "../items/types";

const UseMemo = () => {
  const [count, setCount] = useState<number>(1);
  const [userName, setUserName] = useState<string>("");

  // useMemoを使わないとフォームの名前を一文字入れるだけでheavyProcessの処理が走ってしまう。
  // const heavyProcess = heavy(count);

  // useMemoを使いheavyに更新がある時だけ処理が走る。
  const heavyProcess = useMemo(() =>{
    return heavy(count);
  }, [count])


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // フォームボタンを押した時にページリロードをしない処理
    userName === "" 
    ? alert("ユーザー名入れて")
    : alert(`ユーサー名 : ${userName} です`) 
      setUserName("")
  }
  return (
    <>
      <h2>useMemo</h2>
      <button onClick={() => setCount(count + 1)}>{count}</button>の出来上は"{heavyProcess}"
      <Form 
        value={userName}
        onChange={(e) => {setUserName(e.target.value)}}
        onSubmit={(e) => handleSubmit(e)}
      />
    </>
  );
}

export default UseMemo;

const Form = ({ value, onChange, onSubmit }: TypesForm) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <label>ユーザー名</label>
        <input value={value} onChange={onChange} />
        <button type="submit">送信する</button>
      </form>
    </>
  )
}


const heavy = (count: number) => { //重たい処理
  let i = 0;
  while(i < 10000){
    console.log(i);
    i++;
  }
  return count ** 2; //へき乗の書き方
}