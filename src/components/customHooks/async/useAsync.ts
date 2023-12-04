import { useCallback, useEffect, useState } from "react";

type TypeCallback = () => Promise<any>; 

export const useAsync = (callback: TypeCallback, dependencies: any[] = []) => {
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState<string | undefined>();
  const [ value, setValue ] = useState<string | undefined>();

  const callbackMemoized = useCallback(() => {
    setLoading(true);
    setError(undefined);
    setValue(undefined);
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false));
  }, dependencies);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized])


  return { loading, error, value }
}
