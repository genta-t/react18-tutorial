import { useState } from "react";
import { formsArray } from "../items/data";

const UseState = () => {
  return (
    <>
      <h2>useState</h2>
      {/* <CountComp /> */}
      {/* <HeavyCountComp /> */}
      <InputFrom />
      {/* <BatInputFrom /> */}
      <hr />
    </>
  );
}

export default UseState;

const InputFrom = () => {
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ email, setEmail ] = useState("");

  return(
    <>
      <p>inputForm</p>
      <label htmlFor="firstName">苗字</label>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label htmlFor="lastName">名前</label>
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <label htmlFor="email">メール</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
        <p>苗字 : {firstName}</p>
        <p>名前 : {lastName}</p>
        <p>メール : {email}</p>
      </div>
    </>
  )
}
const BatInputFrom = () => {
  const [ forms, setForms ] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  return(
    <>
      <p>batInputForm</p>
      {formsArray.map((f, i) => {
        return (
          <>
            <label htmlFor={f.value}>{f.name}</label>
            <input
              key={i}
              type={f.type}
              value={forms[f.value]}
              onChange={(e) => setForms((p) => ({
                ...p, // スプレッド構文でlastName、emailの変更しない値はこのように書ける。
                [f.value]: e.target.value,
                // lastName: p.lastName,
                // email: p.email,
              }))}
            />
          </>
        )
      })}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
        {formsArray.map((f, i) => {
          return <p key={i}>{f.name} : {forms[f.value]}</p>
        })}
      </div>
    </>
  )
}

const CountComp = () => {
  const [ count , setCount ] = useState(0);
  const [ batCount , setBatCount ] = useState(0);
  
  const handleClick = () => { //前の値に基づいて更新したい場合は以下のように書く
    setCount((p) => p + 1);
    setCount((p) => p + 1);
  };
  
  const handleClickBat = () => { // これだと+1にしかならない。countには同じ値が入るため。
    setBatCount(batCount + 1);
    setBatCount(batCount + 1);
  }; 

  return (
    <>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>
      <button onClick={handleClickBat}>Bat</button>
      <p>Bat : {batCount}</p>
    </>
  )
}


const HeavyCountComp = () => {
  //重たい処理 ------------------------
  const Heavy = () => {
    for (let i = 0; i < 20000; i++) {
      console.log(i)
    }
    return 0;
  }
  // const [ heavyCount , setHeavyCount ] = useState(Heavy()); // ボタンを押すたび際レンダリングされるのでダメです
  const [ heavyCount , setHeavyCount ] = useState(() => {
    const heavyValue = Heavy();
    return heavyValue;
  });

  const handleClickHeavy = () => { //前の値に基づいて更新したい場合は以下のように書く
    setHeavyCount(heavyCount + 1);
  };
  // --------------------------------
  return (
    <>
      <button onClick={handleClickHeavy}>重い</button>
      <p>{heavyCount}</p>
    </>
  )
}
