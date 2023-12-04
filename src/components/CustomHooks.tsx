import { Link } from 'react-router-dom';

const CustomHooksPage = () => {
  
  return (
    <>
      <Link to="/basic">基本ページへ</Link>
      <Link to="/application">応用ページへ</Link>
      <Link to="/">ホーム</Link>
      <p>カスタムフックです。</p>
    </>
  );
}

export default CustomHooksPage;
