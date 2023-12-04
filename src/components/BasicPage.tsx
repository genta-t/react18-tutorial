import { createContext } from 'react';
import CustomHook from './basics/CustomHook';
import UseCallBack from './basics/UseCallBack';
import UseContext from './basics/UseContext';
import UseEffect from './basics/UseEffect';
import UseMemo from './basics/UseMemo';
import UseReducer from './basics/UseReducer';
import UseRef from './basics/UseRef';
import Use from './items/Use';
import UseDeferredValue from './basics/UseDeferredValue';
import UseId from './basics/UseId';
import UseImperativeHandle from './basics/UseImperativeHandle';
import UseSyncExternalStore from './basics/UseSyncExternalStore';
import UseTransition from './basics/UseTransition';
import UseState from './basics/UseState';
import { Link } from 'react-router-dom';

// useはあまり使わない？？サンプルではuseContextを使った。
export const ThemeContext = createContext<string | null>(null);

const BasicPage = () => {
  
  return (
    <>
      <Link to="/application">応用ページへ</Link>
      <Link to="/custom-hooks">カスタムフックページへ</Link>
      <Link to="/">ホーム</Link>
      <p>基本です</p>
      <UseState />
      <UseEffect />
      <UseContext />
      <UseRef />
      <UseReducer />
      <UseMemo />
      <UseCallBack />
      <CustomHook />
      <ThemeContext.Provider value="dark">
        <Use />
      </ThemeContext.Provider>
      <UseDeferredValue />
      <UseId />
      <UseImperativeHandle />
      <UseSyncExternalStore />
      <UseTransition />
    </>
  );
}

export default BasicPage;
