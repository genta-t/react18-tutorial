import { useEffect, useRef } from "react"

export const useAutoResize = (value: string) => {
  // refの作成
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // 現在参照している要素を取得
    const element = ref.current;

    // 現在参照している要素がない場合は何もしない
    if(!element) {
      return;
    }

    // 最低限の高さを保つ＆文字の大きさに合わせてtextareaが縮むようにする
    element.style.height = "auto";
    
    // element.scrollHeight: 溢れて画面上に表示されない部分を含めた、要素の中身の高さ
    // 文字が溢れるたびに行が追加される。
    element.style.height = `${element.scrollHeight}px`
  }, [value])
  return ref;
}