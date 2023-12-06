import "../../../index.css"
import { useDarkMode } from "./useDarkMode";

const DarkModeComp = () => {
  const [ darkMode, setDarkMode ] = useDarkMode();

  return (
    <>
      <h2>darkMode</h2>
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          border: `ipx solid ${darkMode ? "white" : " black" }`,
          background: "none",
          color: darkMode ? "white" : " black",
        }}
      >
        切り替え
      </button>
      <hr />
    </>
  )
}

export default DarkModeComp;