import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { FormDataContext, TypeReactHookForm3 } from '../ReactHookForm3';

const ConfirmPage = () => {
  const { handleSubmit } = useForm<TypeReactHookForm3>({mode: "onChange"});
  const formData = useContext(FormDataContext);


  const onSubmit = (data: TypeReactHookForm3) => {
    if (formData && formData.updateData) formData.updateData(data);
    console.log("formData", formData);
  }
  
  return (
    <>
      <p>ConfirmPage</p>
      {formData?.formData && (
        <>
          <p>名前: {formData.formData.name}</p>
          <p>メールアドレス: {formData.formData.email}</p>
          <p>都道府県: {formData.formData.prefectures}</p>
          <p>年齢: {formData.formData.age}</p>
        </>

      )}
      <button onClick={handleSubmit(onSubmit)}>送信</button>
    </>
  );
}

export default ConfirmPage;
