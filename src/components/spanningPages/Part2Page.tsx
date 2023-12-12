import { useNavigate } from 'react-router-dom';
import InputFormItem from '../form/InputFormItem';
import { textRule } from '../form/rules';
import PartPageLinks from './PartPageLinks';
import { useFormPartContext, onSubmit } from './utils';

const Part2Page = () => {
  const { formPartData, register, handleSubmit, formState: { errors } } = useFormPartContext();
  const navigate = useNavigate();
  
  return (
    <>
      <PartPageLinks link={"/react-hook-form-3/2"}/>
      <p>Part2Page</p>
      <form onSubmit={handleSubmit(formPartData ? onSubmit(formPartData, "/react-hook-form-3/3", navigate) : () => {})}>
        <InputFormItem 
          title={"都道府県"}
          labelName={"prefectures"}
          type={"text"}
          inputRegister={register}
          errorMessage={errors.prefectures?.message}
          rule={textRule("都道府県")}
          placeholder={"鹿児島"}
        />
        <button type='submit'>次へ</button>
      </form>
    </>
  );
}

export default Part2Page;
