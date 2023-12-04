import { Link } from 'react-router-dom';
import ToggleComp from './customHooks/toggle/ToggleComp';
import TimeoutComp from './customHooks/timeOut/TimeoutComp';
import DebounceComp from './customHooks/debounce/DebounceComp';
import UpdateEffectComp from './customHooks/updateEffect/UpdateEffectComp';

const CustomHooksPage = () => {
  
  return (
    <>
      <Link to="/basic">基本ページへ</Link>
      <Link to="/application">応用ページへ</Link>
      <Link to="/">ホーム</Link>
      <p>カスタムフックです。</p>
      <ToggleComp />
      <TimeoutComp />
      <DebounceComp />
      <UpdateEffectComp />
    </>
  );
}

export default CustomHooksPage;
