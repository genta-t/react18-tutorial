import PageLinks from './items/PageLinks';
import MediaQueryComp from './customHooks/mediaQuery/MediaQueryComp';

const CustomHooksPage2 = () => {
  
  return (
    <>
      <PageLinks link={"/custom-hooks-2"}/>
      <p>カスタムフック2です。</p>
      <MediaQueryComp />
    </>
  );
}

export default CustomHooksPage2;
