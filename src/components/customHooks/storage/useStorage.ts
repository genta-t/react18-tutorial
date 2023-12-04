import { useCallback, useEffect, useState } from "react";

type TypeStorageValue<T> = T | (() => T);

export const useLocalStorage = <T>(key: string, defaultValue: TypeStorageValue<T>) => {
  return useStorage(key, defaultValue, window.localStorage);
}

export const useSessionStorage = <T>(key: string, defaultValue: TypeStorageValue<T>) => {
  return useStorage(key, defaultValue, window.sessionStorage);
}

const useStorage = <T>(key: string, defaultValue: TypeStorageValue<T>, storageObj: Storage)
: [T, React.Dispatch<React.SetStateAction<T>>, () => void] => {
  const [ value, setValue ] = useState<T>(() => {
    const jsonValue = storageObj.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);
    return typeof defaultValue === "function" ? (defaultValue as Function)() : defaultValue;
  });
  
  useEffect(() => {
    if (value === undefined) return storageObj.removeItem(key);
    storageObj.setItem(key, JSON.stringify(value));
  }, [key, value, storageObj])

  const remove = useCallback(() => {
    setValue(p => undefined as unknown as T)
  }, [])

  return [value, setValue, remove,]
}
