import { useState } from "react";
import { useEventListener } from "../eventListener/useEventListener";


export const useOnlineStatus = () => {
  const [ online, setOnline ] = useState(navigator.onLine);

  useEventListener("online", () => setOnline(navigator.onLine));
  useEventListener("offline", () => setOnline(navigator.onLine));
  
  return online;
}
