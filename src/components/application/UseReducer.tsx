import { useReducer, useState } from "react";
import { TypeAction, TypeInitialState } from "../items/types";

// useStateとの使い分け
// より複雑なロジックを用いてstate管理をする時に使う。
// 前のstateに基づいて次のstateが計算される場合。
// 一番のメリットはstateやロジックの数が増えても、state更新の起点がdispatch一つに集約される
// 別で状態管理しないといけない時は使えない！！


const UseReducer = () => {
  return (
    <>
      <h2>useReducer</h2>
      <Bank />
      <hr />
    </>
  );
}

export default UseReducer;

const Bank = () => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const [ amount, setAmount ] = useState<number>(0);

  const onDeposit = (amount: number) => {
    dispatch({ type: "DEPOSIT", payload: amount });
    setAmount(0);
  };
  const onWithdraw = (amount: number) => {
    dispatch({ type: "WITHDRAW", payload: amount });
    setAmount(0);
  };

  return (
    <>
      <p>Bank</p>
      <p>残高 : {state.savings.toLocaleString()} 円</p>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => {setAmount(Number(e.target.value));}}
        />
        <span>円</span>
      </div>
      <div>
        <button onClick={() => onDeposit(amount)}>預け入れ</button>
        <button onClick={() => onWithdraw(amount)}>引き出し</button>
      </div>
      <div>
        <p>履歴</p>
        <ul>
          {state.histories.map((h, i) => {
            return <li key={i}>{h.operation} : {h.amount.toLocaleString()} 円</li>
          })}
        </ul>
      </div>
    </>
  )
}

const initialState: TypeInitialState = {
  savings: 100000,
  histories: [],
}

const reducer = (state: TypeInitialState, action: TypeAction) => {
  switch (action.type) {
    case "DEPOSIT":
      return {
        ...state,
        savings: action.payload ? state.savings + action.payload : state.savings,
        histories: [
          ...state.histories,
          {operation: "預け入れ", amount: action.payload}
        ],
      };
    case "WITHDRAW":
      return {
        ...state,
        savings: action.payload ? state.savings - action.payload : state.savings,
        histories: [
          ...state.histories,
          {operation: "引き出し", amount: action.payload}
        ],
      };
    default:
      return state;
  }
}