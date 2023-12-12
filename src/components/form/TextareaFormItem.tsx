const TextareaFormItem = ({
  title,
  labelName,
  type,
  textareaRegister,
  errorMessage,
  rule,
  requiredItemFlag = true,
  placeholder,
}: TypeTextareaFormItem) => {
  
  return (
    <>
      <label htmlFor={labelName}>{title}</label>
      <textarea
        id={labelName}
        type={type}
        {...requiredItemFlag
          ? textareaRegister(
            labelName,
            rule
          )
          : textareaRegister(labelName)
        }
        placeholder={placeholder}
      />
      <p>{requiredItemFlag ? errorMessage as React.ReactNode : ""}</p>
    </>
  );
}

export default TextareaFormItem;

type TypeTextareaFormItem = {
  title: string;
  labelName: string;
  type: string;
  textareaRegister: any;
  errorMessage: any;
  rule?: any;
  requiredItemFlag?: boolean;
  placeholder?: string;
}
