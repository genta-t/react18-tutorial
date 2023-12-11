import { useContext } from 'react';
import InputFormItem from '../form/InputFormItem';
import { useForm } from "react-hook-form";
import { FormDataContext, TypeReactHookForm3 } from '../ReactHookForm3';
import PartPageLinks from './PartPageLinks';
import { useNavigate } from 'react-router-dom';

const Part3Page = () => {
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
    navigate('/react-hook-form-3/confirm');
  }
  
  return (
    <>
      <PartPageLinks link={"/react-hook-form-3/2"}/>
      <p>Part3Page</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputFormItem 
          title={"年齢"}
          labelName={"age"}
          type={"number"}
          inputRegister={register}
          errorMessage={errors.age?.message}
          requiredItemFlag={false}
        />
        
        <button type='submit'>次へ</button>
      </form>
    </>
  );
}

export default Part3Page;
