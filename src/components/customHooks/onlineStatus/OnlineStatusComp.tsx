import { useOnlineStatus } from "./useOnlineStatus";

const OnlineStatusComp = () => {
  const online = useOnlineStatus();
  return (
    <>
      <h2>onlineStatus</h2>
      <p>{online.toString()}</p>
      <hr />
    </>
  )
}

export default OnlineStatusComp;