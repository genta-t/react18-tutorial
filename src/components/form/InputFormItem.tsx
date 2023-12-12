const InputFormItem = ({
  title,
  labelName,
  type,
  inputRegister,
  errorMessage,
  rule,
  requiredItemFlag = true,
  placeholder,
}: TypeInputFormItem) => {
  
  return (
    <>
      <label htmlFor={labelName}>{title}</label>
      <input
        id={labelName}
        type={type}
        {...requiredItemFlag
          ? inputRegister(
            labelName,
            rule
          )
          : inputRegister(labelName)
        }
        placeholder={placeholder}
      />
      <p>{requiredItemFlag ? errorMessage as React.ReactNode : ""}</p>
    </>
  );
}

export default InputFormItem;

type TypeInputFormItem = {
  title: string;
  labelName: string;
  type: string;
  inputRegister: any;
  errorMessage: any;
  rule?: any;
  requiredItemFlag?: boolean;
  placeholder?: string;
}
