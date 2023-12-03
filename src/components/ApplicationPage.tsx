import { Link } from 'react-router-dom';
import UseState from './application/UseState';
import UseEffect from './application/UseEffect';
import UseContext from './application/UseContext';

const ApplicationPage = () => {
  
  return (
    <>
      <Link to="/basic">基本ページへ</Link>
      <Link to="/">ホーム</Link>
      <p>応用です</p>
      <UseState />
      <UseEffect />
      <UseContext />
    </>
  );
}

export default ApplicationPage;
