import { memo } from "react";
import { TypesButton } from "../../items/types";

// memoでラップすることでButtonコンポーネントに渡すPropsに変更がない場合は再レンダリングされない
// memoでPropsの前後の値を比較してレンダリングするかを決定しています。
const Button = memo(({ buttonText, onClick }: TypesButton) => {
  console.log(`button: ${buttonText}`);
  
  return (
    <>
      <button
        onClick={onClick}
        type="button"
      >
        {buttonText}
      </button>
    </>
  );
});

export default Button;