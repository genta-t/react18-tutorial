import { Link } from 'react-router-dom';
import UseState from './application/UseState';
import UseEffect from './application/UseEffect';
import UseContext from './application/UseContext';
import UseReducer from './application/UseReducer';
import UseCallBack from './application/UseCallBack';
import UseMemo from './application/UseMemo';
import UseRef from './application/UseRef';

const ApplicationPage = () => {
  
  return (
    <>
      <Link to="/basic">基本ページへ</Link>
      <Link to="/">ホーム</Link>
      <p>応用です</p>
      <UseState />
      <UseEffect />
      <UseContext />
      <UseReducer />
      <UseCallBack />
      <UseMemo />
      <UseRef />
    </>
  );
}

export default ApplicationPage;
