import { memo } from "react";
import { TypesCounter } from "../../items/types";

const Counter = memo(({ counterTitle, count }: TypesCounter) => {
  console.log(`counterTitle: ${counterTitle}`);
  return (
    <>
      <p>{counterTitle} : {count} 人</p>
    </>
  );
})

export default Counter;