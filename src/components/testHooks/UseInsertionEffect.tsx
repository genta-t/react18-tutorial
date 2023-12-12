import { useInsertionEffect, useState } from "react";

const UseInsertionEffect = () => {
  const [ theme, setTheme ] = useState<"black" | "white">("black");

  useInsertionEffect(() => { // useEffectでもできる
    const styleRule = getStyleRule(theme);
    document.head.appendChild(styleRule);

    return () => {
      document.head.removeChild(styleRule);
      return undefined;
    }
  }, [theme]);

  const handleSubmit = () => {
    setTheme(theme === "black" ? "white" : "black");
  }

  return (
    <>
      <h2>useInsertionEffect</h2>
      <button
        onClick={handleSubmit}
      >
        切り替え
      </button>
      <hr />
    </>
  );
}

export default UseInsertionEffect;

const getStyleRule = (theme: "black" | "white") => {
  const tag = document.createElement("style");
  tag.innerHTML = `
    button {
      color: ${theme === "black" ? "white" : "black"};
      background-color: ${theme === "black" ? "black" : "white"};
      border: 1px solid ${theme === "black" ? "white" : "black"};
    }
  `
  return tag;
}
