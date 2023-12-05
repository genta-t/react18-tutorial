import { useStateWidthValidation } from "./useStateWidthValidation";

const StateWidthValidationComp = () => {
  const [ username, setUsername, isValid ] = useStateWidthValidation(
    name => name.length > 5,
    ""
  )

  return (
    <>
      <h2>stateWidthValidation</h2>
      <p>Valid: {isValid.toString()}</p>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <hr />
    </>
  )
}

export default StateWidthValidationComp;