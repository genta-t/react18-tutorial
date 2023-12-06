import { useEffect, useState } from "react";
import { useScript } from "./useScript";

declare global {
  interface Window {
    $: any;
  }
}

// 画面の横幅を取得する機能。
const ScriptComp = () => {
  const { loading, error } = useScript("https://code.jquery.com/jquery-3.6.0.min.js");
  const [ windowWidth, setWindowWidth ] = useState<number | null>(null);
  
  useEffect(() => {
    if (typeof window.$ !== "undefined") {
      setWindowWidth(window.$(window).width());
    }
  }, [loading])

  return (
    <>
      <h2>Script</h2>
      { loading ? <p>Loading</p> : <></>}
      { error ? <p>Error</p> : <></>}
      <p>{windowWidth}</p>
      <hr />
    </>
  )
}

export default ScriptComp;