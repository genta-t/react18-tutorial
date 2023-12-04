import { Link } from 'react-router-dom';
import ToggleComp from './customHooks/toggle/ToggleComp';
import Timeout from './customHooks/timeOut/Timeout';

const CustomHooksPage = () => {
  
  return (
    <>
      <Link to="/basic">基本ページへ</Link>
      <Link to="/application">応用ページへ</Link>
      <Link to="/">ホーム</Link>
      <p>カスタムフックです。</p>
      <ToggleComp />
      <Timeout />
    </>
  );
}

export default CustomHooksPage;
