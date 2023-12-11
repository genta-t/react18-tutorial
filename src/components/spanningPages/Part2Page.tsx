import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import InputFormItem from '../form/InputFormItem';
import { textRule } from '../form/rules';
import { useForm } from "react-hook-form";
import { FormDataContext, TypeReactHookForm3 } from '../ReactHookForm3';
import PartPageLinks from './PartPageLinks';

const Part2Page = () => {
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
    console.log("afterData", data);
    navigate('/react-hook-form-3/3');
  }
  
  return (
    <>
      <PartPageLinks link={"/react-hook-form-3/2"}/>
      <p>Part2Page</p>
      <form onSubmit={handleSubmit(onSubmit)}>
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
