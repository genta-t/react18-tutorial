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
import WindowSizeComp from './customHooks/windowSize/WindowSizeComp';
import PageLinks from './items/PageLinks';

const CustomHooksPage1 = () => {
  
  return (
    <>
      <PageLinks link={"/custom-hooks-1"}/>
      <p>カスタムフック1です。</p>
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
      <WindowSizeComp />
    </>
  );
}

export default CustomHooksPage1;
