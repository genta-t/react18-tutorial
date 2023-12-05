import PageLinks from './items/PageLinks';
import MediaQueryComp from './customHooks/mediaQuery/MediaQueryComp';
import GeolocationComp from './customHooks/geolocation/GeolocationComp';
import StateWidthValidationComp from './customHooks/stateWidthValidation/StateWidthValidationComp';
import SizeComp from './customHooks/size/SizeComp';
import EffectOnceComp from './customHooks/effectOnce/EffectOnceComp';
import TranslationComp from './customHooks/translation/TranslationComp';
import ClickOutsideComp from './customHooks/clickOutside/ClickOutsideComp';

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
      {/* <TranslationComp /> */}
    </>
  );
}

export default CustomHooksPage2;
