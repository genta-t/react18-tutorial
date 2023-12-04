import { memo } from "react";
import { TypesTitle } from "../../items/types";

const Title = memo(({ title }: TypesTitle) => {
  console.log(`title: ${title}`);
  return (
    <>
      <h2>{title}</h2>
    </>
  );
})

export default Title;