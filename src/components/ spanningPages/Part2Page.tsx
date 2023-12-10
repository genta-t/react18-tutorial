import { useContext } from 'react';
import { Link } from 'react-router-dom';
import InputFormItem from '../form/InputFormItem';
import { textRule } from '../form/rules';
import { useForm } from "react-hook-form";
import { FormDataContext } from '../ReactHookForm3';
import { TypeReactHookForm3 } from './Part1Page';

const Part2Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    unregister,
    reset
  } = useForm<TypeReactHookForm3>({mode: "onChange"});
  const formData = useContext(FormDataContext);


  const onSubmit = (data: TypeReactHookForm3) => {
    console.log(data);
    if (formData && formData.updateData) formData.updateData(data);
    console.log(formData);
  }
  
  return (
    <>
      {/* <PageLinks link={"/react-hook-form-1"}/> */}
      <Link to={"/react-hook-form-3-1"} style={{ marginRight: "8px"}}>Part1</Link>
      <p>Part2</p>
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
