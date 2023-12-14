import PageLinks from './items/PageLinks';
import PriceOneHundred from './jotai/PriceOneHundred';
import CountDifference from './jotai/CountDifference';
import TodoList from './jotai/TodoList';
import { Provider } from 'jotai';

const JotaiBasePage = () => {
  return (
    <div>
      <PageLinks link={"/jotai-base"}/>
      <p>jotai基本です</p>
      <PriceOneHundred />
      <CountDifference />
      {/* 今回は区切る必要ないけど書いた */}
      <Provider>
        <p>jotaiTodoApp</p>
        <TodoList />
      </Provider>
    </div>
  );
}

export default JotaiBasePage;
