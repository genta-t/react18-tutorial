import { useMediaQuery } from "./useMediaQuery";

const MediaQueryComp = () => {
  const isLarge = useMediaQuery("(min-width: 500px");

  return (
    <>
      <h2>mediaQuery</h2>
      <p>isMinWidth500px? : {isLarge.toString()}</p>
      <hr />
    </>
  )
}

export default MediaQueryComp;