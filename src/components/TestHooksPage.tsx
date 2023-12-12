// import { useOptimistic } from 'react';
import PageLinks from './items/PageLinks';
import UseInsertionEffect from './testHooks/UseInsertionEffect';
import UseLayoutEffect from './testHooks/UseLayoutEffect';

const TestHooksPage = () => {
  return (
    <>
      <PageLinks link={"/test-hooks"}/>
      <p>テストフックです</p>
      <UseLayoutEffect />
      <UseInsertionEffect />
    </>
  );
}

export default TestHooksPage;
