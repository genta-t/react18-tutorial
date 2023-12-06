import { useState } from "react";

// [boolean, (value?: boolean) => void] で　const [ value , toggleValue ]　の部分の型定義をしている。
// (defaultValue: boolean) でuseToggle(false)の部分の型定義をしている
export const useToggle = (defaultValue: boolean) : [boolean, (value?: boolean) => void] => {
  const [ value , setValue ] = useState(defaultValue);
  
  const toggleValue = (value?: boolean) => {
    setValue(currentValue => 
        typeof value === "boolean" ? value : !currentValue
      )
  };

  return [value, toggleValue]
}
