const PullDownItem = ({
  title,
  labelName,
  pullDownRegister,
  array
}: TypePullDownItem) => {
  return (
    <>
      <label htmlFor={labelName}>{title}</label>
      <select {...pullDownRegister(labelName)}>
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
}

type TypePullDownOptions = {
  value: string;
  text: string;
}
