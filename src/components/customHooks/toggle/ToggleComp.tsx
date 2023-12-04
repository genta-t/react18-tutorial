import { useToggle } from "./useToggle";

const ToggleComp = () => {
  const [ value , toggleValue ] = useToggle(false);

  return (
    <>
      <p>{value.toString()}</p>
      <button onClick={() => toggleValue()}>Toggle</button>
      <button onClick={() => toggleValue(true)}>True</button>
      <button onClick={() => toggleValue(false)}>False</button>
    </>
  )
}

export default ToggleComp;