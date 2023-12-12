const RadioButtonItem = ({
  text,
  valueAndId,
  name,
  ruleName,
  radioButtonRegister
}: TypeRadioButtonItem) => {
  return (
    <>
      <label>
        <input 
          type="radio" 
          value={valueAndId} 
          id={valueAndId} 
          {...radioButtonRegister(name, { 
            required: `${ruleName}を選択してください`,
          })} 
        />{text}
      </label>
    </>
  );
}

export default RadioButtonItem;

type TypeRadioButtonItem = {
  text: string;
  name: string;
  valueAndId: string;
  ruleName: string;
  radioButtonRegister: any;
}
