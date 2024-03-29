import PageLinks from './items/PageLinks';
import MediaQueryComp from './customHooks/mediaQuery/MediaQueryComp';
import GeolocationComp from './customHooks/geolocation/GeolocationComp';
import StateWidthValidationComp from './customHooks/stateWidthValidation/StateWidthValidationComp';
import SizeComp from './customHooks/size/SizeComp';
import EffectOnceComp from './customHooks/effectOnce/EffectOnceComp';
import ClickOutsideComp from './customHooks/clickOutside/ClickOutsideComp';
import DarkModeComp from './customHooks/darkMode/DarkModeComp';
import CopyToClipboardComp from './customHooks/copyToClipboard/CopyToClipboardComp';
import CookieComp from './customHooks/cookie/CookieComp';
import TranslationComp from './customHooks/translation/TranslationComp';
import OnlineStatusComp from './customHooks/onlineStatus/OnlineStatusComp';
import RenderCountComp from './customHooks/renderCount/RenderCountComp';
import DebugInformationComp from './customHooks/debugInformation/DebugInformationComp';
import HoverComp from './customHooks/hover/HoverComp';
import LongPressComp from './customHooks/longPress/LongPressComp';

const CustomHooksPage2 = () => {
  
  return (
    <>
      <PageLinks link={"/custom-hooks-2"}/>
      <p>カスタムフック2です。</p>
      <MediaQueryComp />
      <GeolocationComp />
      <StateWidthValidationComp />
      <SizeComp />
      <EffectOnceComp />
      <ClickOutsideComp />
      <DarkModeComp />
      <CopyToClipboardComp />
      <CookieComp />
      <TranslationComp />
      <OnlineStatusComp />
      <RenderCountComp />
      <DebugInformationComp />
      <HoverComp />
      <LongPressComp />
    </>
  );
}

export default CustomHooksPage2;
