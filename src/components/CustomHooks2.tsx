import PageLinks from './items/PageLinks';
import MediaQueryComp from './customHooks/mediaQuery/MediaQueryComp';
import GeolocationComp from './customHooks/geolocation/GeolocationComp';

const CustomHooksPage2 = () => {
  
  return (
    <>
      <PageLinks link={"/custom-hooks-2"}/>
      <p>カスタムフック2です。</p>
      <MediaQueryComp />
      <GeolocationComp />
    </>
  );
}

export default CustomHooksPage2;
