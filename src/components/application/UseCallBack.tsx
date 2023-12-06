import { useCallback, useState } from "react";
import Title from "./useCallback/Title";
import SubTitle from "./useCallback/SubTitle";
import Counter from "./useCallback/Counter";
import Button from "./useCallback/Button";


const UseCallBack = () => {
  const [ countA, setCountA ] = useState<number>(0);
  const [ countB, setCountB ] = useState<number>(0);

  // ↓memoの中では違う関数だと認識されるのでuseCallbackで関数をメモ化する(今回はcountA,countB)
  // const handleCountA = useCallback(() => {
  //   setCountA(countA + 1);
  // }, [countA]);
  // const handleCountB = useCallback(() => {
  //   setCountB(countB + 1);
  // }, [countB]);

  // ↓の書き方だとボタンは再レンダリングされないのでペストプラクティス。
  const handleCountA = useCallback(() => {
    setCountA((p) => p + 1);
  }, []);
  const handleCountB = useCallback(() => {
    setCountB((p) => p + 1);
  }, []);

  console.log("-----------------------");
  
  return (
    <>
      <Title title={"useCallBack"} />
      <SubTitle subTitle={"緊急アンケート : A？ or B？"}/>
      <Button onClick={handleCountA} buttonText={"A"}/>
      <Counter counterTitle={"A"} count={countA}/>
      <Button onClick={handleCountB} buttonText={"B"}/>
      <Counter counterTitle={"B"} count={countB}/>
      <hr />
    </>
  );
}

export default UseCallBack;