const FileItem = ({
  title,
  labelName,
  fileRegister,
  errorMessage,
  requiredItemFlag = true,
  // onChange
}: TypeFileItem) => {
  return (
    <div>
      <label htmlFor={labelName}>{title}</label>
      <input type="file" 
        {...requiredItemFlag
          ? fileRegister(
            labelName,
            { required: `${title}を添付してください` }
            )
          : fileRegister(labelName)
        }
      />
      <p>{requiredItemFlag ? errorMessage as React.ReactNode : ""}</p>
      {/* <input type="file" onChange={onChange} /> */}
    </div>
  );
}

export default FileItem;

type TypeFileItem = {
  title: string;
  labelName: string;
  fileRegister: any;
  errorMessage?: any;
  requiredItemFlag?: boolean;
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
