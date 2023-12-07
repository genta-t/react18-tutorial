const CheckBoxItem = ({
  title,
  requiredMessage,
  labelName,
  errorMessage,
  checkBoxRegister
}: TypeCheckBoxItem) => {
  return (
    <div> 
      <label htmlFor={labelName}>{title}</label>
      <input type="checkbox" {...checkBoxRegister(labelName, {required: requiredMessage})} />
      <p>{errorMessage as React.ReactNode}</p>
    </div>
  );
}

export default CheckBoxItem;

type TypeCheckBoxItem = {
  title: string;
  labelName: string;
  requiredMessage: string;
  checkBoxRegister: any;
  errorMessage?: any;
}
