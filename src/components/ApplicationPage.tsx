import UseState from './application/UseState';
import UseEffect from './application/UseEffect';
import UseContext from './application/UseContext';
import UseReducer from './application/UseReducer';
import UseCallBack from './application/UseCallBack';
import UseMemo from './application/UseMemo';
import UseRef from './application/UseRef';
import PageLinks from './items/PageLinks';

const ApplicationPage = () => {
  
  return (
    <>
      <PageLinks link={"/application"}/>
      <p>応用です</p>
      <UseState />
      <UseEffect />
      <UseContext />
      <UseReducer />
      <UseCallBack />
      <UseMemo />
      <UseRef />
    </>
  );
}

export default ApplicationPage;
