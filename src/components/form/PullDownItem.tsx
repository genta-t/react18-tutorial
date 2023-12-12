const PullDownItem = ({
  title,
  labelName,
  pullDownRegister,
  array,
  requiredItemFlag = true,
}: TypePullDownItem) => {
  return (
    <>
      <label htmlFor={labelName}>{title}</label>
      <select
        {...requiredItemFlag
          ? pullDownRegister(
            labelName,
            {required: `${title}を入れて`}
          )
          : pullDownRegister(labelName)
        }
      >
        {array.map((c, i) => {
          return <option key={i} value={c.value}>{c.text}</option>
        })}
      </select>
    </>
  );
}

export default PullDownItem;

type TypePullDownItem = {
  title: string;
  labelName: string;
  pullDownRegister: any;
  array: TypePullDownOptions[];
  requiredItemFlag?: boolean;
}

type TypePullDownOptions = {
  value: string;
  text: string;
}
