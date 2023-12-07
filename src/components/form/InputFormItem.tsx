const InputFormItem = ({
  title,
  labelName,
  type,
  InputRegister,
  errorMessage,
  rule,
}: TypeInputFormItem) => {
  
  return (
    <>
      <label htmlFor={labelName}>{title}</label>
      <input
        id={labelName}
        type={type}
        {...InputRegister(
          labelName,
          rule
        )}
      />
      <p>{errorMessage as React.ReactNode}</p>
    </>
  );
}

export default InputFormItem;

type TypeInputFormItem = {
  title: string;
  labelName: string;
  type: string;
  InputRegister: any;
  errorMessage: any;
  rule?: any;
}
