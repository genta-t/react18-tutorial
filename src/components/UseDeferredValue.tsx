import { useDeferredValue, useState, memo } from "react";

//　遅延読み込みを行い、文字を入力した時の遅延を減らす。情報の取得が完了したら表示させるもの。データが重い時に使う？

const UseDeferredValue = () => {
  const [ text, setText ] = useState("");
  const deferredText = useDeferredValue(text);


  return (
    <>
      <h2>useDeferredValue</h2>
      <input type="text" value={text} onChange={e => setText(e.target.value)}/>
      <SlowList text={deferredText} />
      <hr />
    </>
  );
}

export default UseDeferredValue;

const SlowList = memo(({ text } : { text: string }) => {
  console.log("[ARTIFICIALLY SLOW] Rendering 250 <SlowItem />");

  let items = [];
  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem key={i} text={text} />);
  }

  return (
    <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr"}}>
      {items}
    </ul>
  )
});

const SlowItem = ({ text } : { text: string }) => {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // この部分は、コンポーネントがレンダリングされるたびに、約1ミリ秒間何もしないループを実行します。
    // performance.now() は現在のタイムスタンプ（ページロードからの経過時間）をミリ秒単位で返します
    // したがって、このループは現在のタイムスタンプと startTime の差が1ミリ秒になるまで続きます。

    // この「何もしない」ループは、非常に処理が重いコードを模倣するためのものです。
    // つまり、このコンポーネントは、レンダリングが遅いコンポーネントの挙動をテストするためのものと考えられます。
  }

  return (
    <li>
      Text : {text}
    </li>
  )
}