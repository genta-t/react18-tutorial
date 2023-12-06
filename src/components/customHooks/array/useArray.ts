import { useState } from "react";

export const useArray = <TypesUseArray>(defaultValue: TypesUseArray[]) => {
  const [ array, setArray ] = useState<TypesUseArray[]>(defaultValue);

  const push = (element: TypesUseArray) => {
    setArray(a => [...a, element])
  }

  const filter = (callback: (value: TypesUseArray) => boolean) => {
    setArray(a => a.filter(callback))
  }

  const update = (index: number, newElement: TypesUseArray) => {
    setArray(a => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length - 1),
    ])
  }

  const remove = (index: number) => {
    setArray(a => [
      ...a.slice(0, index),
      ...a.slice(index + 1, a.length - 1),
    ])
  }

  const clear = () => {
    setArray([])
  }

  return {
    array,
    set: 
      setArray,
      push,
      filter,
      update,
      remove,
      clear,
  }
}
