import { useToggle } from "./useToggle";

const ToggleComp = () => {
  const [ value , toggleValue ] = useToggle(false);

  return (
    <>
      <h2>Toggle</h2>
      <p>{value.toString()}</p>
      <button onClick={() => toggleValue()}>Toggle</button>
      <button onClick={() => toggleValue(true)}>True</button>
      <button onClick={() => toggleValue(false)}>False</button>
      <hr />
    </>
  )
}

export default ToggleComp;