import { useNavigate } from 'react-router-dom';
import InputFormItem from '../form/InputFormItem';
import { emailRule, textRule } from '../form/rules';
import PartPageLinks from './PartPageLinks';
import { useFormPartContext, onSubmit } from './utils';

const Part1Page = () => {
  const { formPartData, register, handleSubmit, formState: { errors } } = useFormPartContext();
  const navigate = useNavigate();
  
  return (
    <>
      <PartPageLinks link={"/react-hook-form-3/1"}/>
      <p>Part1Page</p>
      <form onSubmit={handleSubmit(formPartData ? onSubmit(formPartData, "/react-hook-form-3/2", navigate) : () => {})}>
        <InputFormItem 
          title={"名前"}
          labelName={"name"}
          type={"text"}
          inputRegister={register}
          errorMessage={errors.name?.message}
          rule={textRule("名前")}
          placeholder={"山田 太郎"}
        />
        <InputFormItem 
          title={"メールアドレス"}
          labelName={"email"}
          type={"email"}
          inputRegister={register}
          errorMessage={errors.email?.message}
          rule={emailRule}
          placeholder={"sample@gmail.com"}
        />
        <button type='submit'>次へ</button>
      </form>
    </>
  );
}

export default Part1Page;