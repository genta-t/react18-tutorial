import { Link } from 'react-router-dom';
import UseState from './application/UseState';

const ApplicationPage = () => {
  
  return (
    <>
      <Link to="/basic">基本ページへ</Link>
      <Link to="/">ホーム</Link>
      <p>応用です</p>
      <UseState />
    </>
  );
}

export default ApplicationPage;
