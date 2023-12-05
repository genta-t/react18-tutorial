import PageLinks from './items/PageLinks';
import MediaQueryComp from './customHooks/mediaQuery/MediaQueryComp';
import GeolocationComp from './customHooks/geolocation/GeolocationComp';
import StateWidthValidationComp from './customHooks/stateWidthValidation/StateWidthValidationComp';

const CustomHooksPage2 = () => {
  
  return (
    <>
      <PageLinks link={"/custom-hooks-2"}/>
      <p>カスタムフック2です。</p>
      <MediaQueryComp />
      <GeolocationComp />
      <StateWidthValidationComp />
    </>
  );
}

export default CustomHooksPage2;
