import { useGeolocation } from "./useGeolocation";

// 現在地を取得するカスタムフック
const GeolocationComp = () => {
  const { loading, error, data: { latitude, longitude } } = useGeolocation();

  return (
    <>
      <h2>geolocation</h2>
      <p>Loading: {loading.toString()}</p>
      <p>Error: {error?.message}</p>
      <p>{latitude} x {longitude}</p>
      <hr />
    </>
  )
}

export default GeolocationComp;