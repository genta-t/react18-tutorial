import { useEffect, useState } from "react";

const UseEffect = () => {
  const [ isDisplay, setIsDisplay ] = useState(true);

  const handleDisplay = () => {
    setIsDisplay(!isDisplay);
  }
  return (
    <>
      <h2>useEffect</h2>
      <p>基本</p>
      <button onClick={() => handleDisplay()}>
        {isDisplay ? "非表示" : "表示"}
      </button>
      {isDisplay && <CountComp />}
    </>
  );
}

export default UseEffect;

const CountComp = () => {
  const [ count1 , setCount1 ] = useState(0);
  const [ count2 , setCount2 ] = useState(0);
  
  const handleClick1 = () => {
    setCount1(count1 + 1);
  };

  const handleClick2 = () => {
    setCount2(count2 + 1);
  };

  // useEffect(() => {
  //   console.log("useEffect確認");
  // }, [count1]) 
  //マウント時（初めの読み込み時）のみ発火は第二引数に[]のからの配列を入れる
  // 第二引数の[]の中に値が変更する変数を入れるとボタンを押すたびにuseEffect内の処理が発火される。
  // ループをしそうな処理でuseEffect内の第二引数に[count1]とsetCount1、setCount2などを入れない。　無限ループするため。

  useEffect(() => {
    console.log("useEffect確認");
    const countUp = setInterval(() => {
      setCount1((p) => p + 1);
      console.log("countUp");
    }, 1000)
    return () => {
      clearInterval(countUp);
      console.log("unmount")
    }
  }, []) 
  // カウントアップの時はreturnのunmount処理を書かないと２ずつ増える
  // 繰り返しの処理とかが入る場合はキャンセル処理を入れる

  
  return (
    <>
      <p><span><button onClick={handleClick1}>count1</button></span>　{count1}</p>
      <p><span><button onClick={handleClick2}>count2</button></span>　{count2}</p>
      <hr />
    </>
  );
}
