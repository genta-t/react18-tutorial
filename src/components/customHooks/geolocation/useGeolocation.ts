import { useEffect, useState } from "react"

// 現在地を取得するカスタムフック
export const useGeolocation = (options?: PositionOptions) => {
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState<GeolocationPositionError | undefined>();
  const [ data, setData ] = useState<{ latitude?: number, longitude?: number }>({});

  useEffect(() => {
    const successHandler = (e : GeolocationPosition) => {
      setLoading(false);
      setError(undefined);
      setData(e.coords);
    };
    const errorHandler = (e : GeolocationPositionError) => {
      setError(e);
      setLoading(false);
    };
    navigator.geolocation.getCurrentPosition(
      successHandler,
      errorHandler,
      options
    )
    const id = navigator.geolocation.watchPosition(
      successHandler,
      errorHandler,
      options
    )

    return () => navigator.geolocation.clearWatch(id)
  }, [options]);

  return { loading, error, data };
}
