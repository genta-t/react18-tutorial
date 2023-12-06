const InputFormItem = ({
  title,
  labelName,
  type,
  register,
  errorMessage,
  rule,
}: TypeInputFormItem) => {
  
  return (
    <>
      <label htmlFor={labelName}>{title}</label>
      <input
        id={labelName}
        type={type}
        {...register(
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
  register: any;
  errorMessage: any;
  rule: any;
}
