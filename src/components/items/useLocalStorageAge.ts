import { useDebugValue, useEffect, useState } from "react";

const useLocalStorageAge = (key: string, defaultValue: number) => {
  const [ value, setValue ] = useState(() => {
    const jsonValue = window.localStorage.getItem(key);
    if (jsonValue !== null) return JSON.parse(jsonValue); //jsonValueがあれば28という値を復元する
    return defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [ value, setValue ])
// この特定のuseEffectフックは、valueまたはsetValueが変更されるたびに実行されます。これは、useEffectの第二引数として配列[value, setValue]が渡されているためです。
// フック内部の処理は、window.localStorage.setItem(key, JSON.stringify(value));という一行です。これは、valueをJSON形式の文字列に変換し、それをローカルストレージに保存します。キーはkey変数の値となります。
// つまり、このuseEffectフックは、valueまたはsetValueが変更されるたびに、valueの現在の値をローカルストレージに保存します。これにより、ページのリロードやブラウザの再起動後でもvalueの値を保持することができます。

  useDebugValue([key, defaultValue]);
  // useDebugValue(value, v => slowProcessing(v)); // 重たい処理の時にこの書き方をすると他の影響がない。＾＾

  return [ value, setValue ];
};

export default useLocalStorageAge;

const slowProcessing = (value: any) => {
  for (let i = 0; i < 30000000; i++) {}
  return value
}