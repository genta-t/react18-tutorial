import { memo } from "react";
import { TypesSubTitle } from "../../items/types";

const SubTitle = memo(({ subTitle }: TypesSubTitle) => {
  console.log(`subTitle: ${subTitle}`);
  return (
    <>
      <p>{subTitle}</p>
    </>
  );
})

export default SubTitle;