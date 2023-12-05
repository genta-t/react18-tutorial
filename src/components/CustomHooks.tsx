import { Link } from 'react-router-dom';
import ToggleComp from './customHooks/toggle/ToggleComp';
import TimeoutComp from './customHooks/timeOut/TimeoutComp';
import DebounceComp from './customHooks/debounce/DebounceComp';
import UpdateEffectComp from './customHooks/updateEffect/UpdateEffectComp';
import ArrayComp from './customHooks/array/ArrayComp';
import PreviousComp from './customHooks/previous/PreviousComp';
import StateWithHistoryComp from './customHooks/stateWithHistory/StateWithHistoryComp';
import StorageComp from './customHooks/storage/StorageComp';
import AsyncComp from './customHooks/async/AsyncComp';
import FetchComp from './customHooks/fetch/FetchComp';
import ScriptComp from './customHooks/script/ScriptComp';
import DeepCompareEffectComp from './customHooks/deepCompareEffect/DeepCompareEffectComp';
import EventListenerComp from './customHooks/eventListener/EventListenerComp';
import OnScreenComp from './customHooks/onScreen/OnScreenComp';

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
      <ArrayComp />
      <PreviousComp />
      <StateWithHistoryComp />
      <StorageComp />
      <AsyncComp />
      <FetchComp />
      <ScriptComp />
      <DeepCompareEffectComp />
      <EventListenerComp />
      <OnScreenComp />
    </>
  );
}

export default CustomHooksPage;
