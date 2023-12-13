const PullDownItem = ({
  title,
  labelName,
  pullDownRegister,
  array,
  requiredItemFlag = true,
}: TypePullDownItem) => {
  return (
    <div>
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
          return <option key={i ? i : c.id} value={c.value ? c.value : c.text}>{c.text}</option>
        })}
      </select>
    </div>
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
  id? : number;
  value?: string;
  text: string;
}