import { useEffect, useRef, useState } from "react";
import { useCopyToClipboard } from "./useCopyToClipboard";

const CopyToClipboardComp = () => {
  const [ copyToClipboard, { success, setSuccess }] = useCopyToClipboard();
  const inputRef = useRef<HTMLInputElement>(null);
  const [ inputValue, setInputValue ] = useState<string>("");

  useEffect(() => { //入力フィールドが空になったときにsuccessの状態がリセットされ、再度入力してもボタンのテキストが「コピーしてね」のままになります。
    if(inputValue === "") setSuccess(false);
  },[inputValue]);

  const handleCopy = () => {
    const textToCopy = inputRef.current?.value || "";
    copyToClipboard(textToCopy);
    setInputValue(textToCopy);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); //インプットタグの文字を動的に監視
  }

  return (
    <>
      <h2>copyToClipboard</h2>
      <button onClick={handleCopy}>
        {success && inputValue ? "コピーできたよ" : "コピーしてね" }
      </button>
      <input
        type="text"
        ref={inputRef}
        onChange={handleInputChange}
      />
      <textarea />
      <hr />
    </>
  )
}

export default CopyToClipboardComp;