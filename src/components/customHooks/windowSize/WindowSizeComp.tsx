import { useWindowSize } from "./useWindowSize";

const WindowSizeComp = () => {
  const { width, height } = useWindowSize();

  return (
    <>
      <h2>windowSize</h2>
      <p>{width} x {height}</p>
      <hr />
    </>
  )
}

export default WindowSizeComp;