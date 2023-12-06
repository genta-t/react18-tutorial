import { useToggle } from "../toggle/useToggle";
import { useRenderCount } from "./useRenderCount";

const RenderCountComp = () => {
  const [ boolean, toggle ] = useToggle(false);
  const { renderCount, incrementCount } = useRenderCount();
  
  return (
    <>
      <h2>renderCount</h2>
      <p>{boolean.toString()}</p>
      <p>{renderCount}</p>
      <button onClick={() => {toggle(); incrementCount();}}>トグル</button>
      <hr />
    </>
  )
}

export default RenderCountComp;