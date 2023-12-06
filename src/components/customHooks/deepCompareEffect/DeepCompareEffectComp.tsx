import { useEffect, useRef, useState } from "react";
import { useDeepCompareEffect } from "./useDeepCompareEffect";

const DeepCompareEffectComp = () => {
  const [ age, setAge ] = useState(0);
  const [ otherCount, setOtherCount ] = useState(0);
  const useEffectCountRef = useRef(0);
  const useDeepCompareEffectRef = useRef(0);
  const person = { age: age, name: "かいる" }

  useEffect(() => {
    useEffectCountRef.current = useEffectCountRef.current + 1
  }, [person]);

  useDeepCompareEffect(() => {
    useDeepCompareEffectRef.current = useDeepCompareEffectRef.current + 1
  }, [person]);

  return (
    <>
      <h2>DeepCompareEffect</h2>
      <p>useEffect: <span>{useEffectCountRef.current}</span></p>
      <p>useDeepEffect: <span>{useDeepCompareEffectRef.current}</span></p>
      <p>カウント: {otherCount}</p>
      <p>{JSON.stringify(person)}</p>
      <button onClick={() => setAge(c => c + 1)}>インクリメント年齢</button>
      <button onClick={() => setOtherCount(c => c + 1)}>インクリメントカウント</button>
      <hr />
    </>
  )
}

export default DeepCompareEffectComp;