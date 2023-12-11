import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import InputFormItem from '../form/InputFormItem';
import { emailRule, textRule } from '../form/rules';
import { useForm } from "react-hook-form";
import { FormDataContext, TypeReactHookForm3 } from '../ReactHookForm3';
import PartPageLinks from './PartPageLinks';

const Part1Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeReactHookForm3>({mode: "onChange"});
  const formData = useContext(FormDataContext);
  const navigate = useNavigate();


  const onSubmit = (data: TypeReactHookForm3) => {
    console.log("data", data);
    if (formData && formData.updateData) formData.updateData(data);
    console.log("formData", formData);
    navigate('/react-hook-form-3/2');
  }
  
  return (
    <>
      <PartPageLinks link={"/react-hook-form-3/1"}/>
      <p>Part1Page</p>
      <form onSubmit={handleSubmit(onSubmit)}>
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