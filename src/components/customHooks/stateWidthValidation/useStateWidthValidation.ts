import { useCallback, useState } from "react"

export const useStateWidthValidation = (
  validationFunc: (value: string) => boolean, initialValue: any) => {
  const [ state, setState ] = useState(initialValue);
  const [ isValid, setIsValid ] = useState(() => validationFunc(state));

  const onChange = useCallback(
    (nextState: ((prevState: typeof state) => typeof state | typeof state)) => {
      const value = typeof nextState === "function" ? nextState(state) : nextState;
      setState(value);
      setIsValid(validationFunc(value));
    },
    [validationFunc]
  )

  return [ state, onChange, isValid]
}
