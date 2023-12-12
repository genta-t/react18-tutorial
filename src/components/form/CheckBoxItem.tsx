const CheckBoxItem = ({
  title,
  requiredMessage,
  labelName,
  errorMessage,
  checkBoxRegister,
  requiredItemFlag = true,
}: TypeCheckBoxItem) => {
  return (
    <div> 
      <label htmlFor={labelName}>{title}</label>
      <input
        type="checkbox"
        {...requiredItemFlag
          ? checkBoxRegister(
              labelName,
              {required: requiredMessage}
            )
          : checkBoxRegister(labelName)
        }
      />
      <p>{requiredItemFlag ? errorMessage as React.ReactNode : ""}</p>
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
  requiredItemFlag?: boolean;
}
