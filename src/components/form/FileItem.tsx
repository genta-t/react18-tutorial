const FileItem = ({
  title,
  labelName,
  onChange
}: TypeFileItem) => {
  return (
    <>
      <label htmlFor={labelName}>{title}</label>
        <input type="file" onChange={onChange} />
    </>
  );
}

export default FileItem;

type TypeFileItem = {
  title: string;
  labelName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
