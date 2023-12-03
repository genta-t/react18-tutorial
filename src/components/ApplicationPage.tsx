import { Link } from 'react-router-dom';

const ApplicationPage = () => {
  
  return (
    <>
      <Link to="/basic">基本ページへ</Link>
      <Link to="/">ホーム</Link>
      <p>応用です</p>
    </>
  );
}

export default ApplicationPage;
