import PageLinks from './items/PageLinks';
import MediaQueryComp from './customHooks/mediaQuery/MediaQueryComp';
import GeolocationComp from './customHooks/geolocation/GeolocationComp';
import StateWidthValidationComp from './customHooks/stateWidthValidation/StateWidthValidationComp';
import SizeComp from './customHooks/size/SizeComp';
import EffectOnceComp from './customHooks/effectOnce/EffectOnceComp';

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
    </>
  );
}

export default CustomHooksPage2;
