import { createContext } from 'react';
import CustomHook from './components/CustomHook';
import UseCallBack from './components/UseCallBack';
import UseContext from './components/UseContext';
import UseEffect from './components/UseEffect';
import UseMemo from './components/UseMemo';
import UseReducer from './components/UseReducer';
import UseRef from './components/UseRef';
import UseState from './components/UseState';
import Use from './components/items/Use';

// useはあまり使わない？？サンプルではuseContextを使った。
export const ThemeContext = createContext<string | null>(null);

const App = () => {
  return (
    <>
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
    </>
  );
}

export default App;
