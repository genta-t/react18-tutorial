import Cookies from "js-cookie";
import { useCallback, useState } from "react";

type TypesUseCookie = [
  string | null,
  (newValue: string, options?: Cookies.CookieAttributes) => void,
  () => void,
]

export const useCookie = (name: string, defaultValue: string) : TypesUseCookie => {
  const [ value, setValue ] = useState<string | null>(() => {
    const cookie = Cookies.get(name);
    if (cookie) return cookie;
    Cookies.set(name, defaultValue);
    return defaultValue;
  });

  const updateCooke = useCallback(
    (newValue: string, options?: Cookies.CookieAttributes) => {
      Cookies.set(name, defaultValue, options);
      setValue(newValue);
    },
    [name]
  )

  const deleteCookie = useCallback(() => {
    Cookies.remove(name);
    setValue(null);
  }, [name]);
  
  return [ value, updateCooke, deleteCookie ];
}
