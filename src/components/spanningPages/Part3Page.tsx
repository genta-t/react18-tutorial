import InputFormItem from '../form/InputFormItem';
import PartPageLinks from './PartPageLinks';
import { useNavigate } from 'react-router-dom';
import { useFormPartContext, onSubmit } from './utils';
import FileItem from '../form/FileItem';
import { fileType } from '../form/rules';

const Part3Page = () => {
  const { formPartData, register, handleSubmit, formState: { errors } } = useFormPartContext();
  const navigate = useNavigate();

  return (
    <>
      <PartPageLinks link={"/react-hook-form-3/2"}/>
      <p>Part3Page</p>
      <form onSubmit={handleSubmit(formPartData ? onSubmit(formPartData, "/react-hook-form-3/confirm", navigate) : () => {})}>
        <InputFormItem 
          title={"年齢"}
          labelName={"age"}
          type={"number"}
          inputRegister={register}
          errorMessage={errors.age?.message}
          requiredItemFlag={false}
        />
        <FileItem
          title={"添付ファイル"}
          labelName={"attachment"}
          fileRegister={register}
          errorMessage={errors.attachment?.message}
          rule={fileType(["jpg", "png", "jpeg"])}
        />
        <button type='submit'>確認する</button>
      </form>
    </>
  );
}

export default Part3Page;
