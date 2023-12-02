import UseCallBack from './components/UseCallBack';
import UseContext from './components/UseContext';
import UseEffect from './components/UseEffect';
import UseMemo from './components/UseMemo';
import UseReducer from './components/UseReducer';
import UseRef from './components/UseRef';
import UseState from './components/UseState';

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
    </>
  );
}

export default App;
