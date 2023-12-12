// import { useOptimistic } from 'react';
import PageLinks from './items/PageLinks';
import UseLayoutEffect from './testHooks/UseLayoutEffect';

const TestHooksPage = () => {
  // const [optimisticState, addOptimistic] = useOptimistic(state, updateFn);
  return (
    <>
      <PageLinks link={"/test-hooks"}/>
      <p>テストフックです</p>
      <UseLayoutEffect />
    </>
  );
}

export default TestHooksPage;
