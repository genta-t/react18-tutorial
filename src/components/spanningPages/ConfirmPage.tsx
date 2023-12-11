import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { FormDataContext } from '../ReactHookForm3';
import { TypeReactHookForm3 } from '../types';

const ConfirmPage = () => {
  const { handleSubmit } = useForm<TypeReactHookForm3>({mode: "onChange"});
  const formData = useContext(FormDataContext);
  const navigate = useNavigate();

  const onSubmit = (data: TypeReactHookForm3) => {
    alert("本当にいいんですね？");
    if (formData && formData.updateData) formData.updateData(data);
    console.log("formData", formData);
    alert("送信しました");
  }

  const handlePage1Edit = () =>{
    navigate('/react-hook-form-3/1');
  }

  const handlePage2Edit = () =>{
    navigate('/react-hook-form-3/2');
  }

  const handlePage3Edit = () =>{
    navigate('/react-hook-form-3/3');
  }
  
  return (
    <>
      <p>ConfirmPage</p>
      {formData?.formData && (
        <>
          <p>名前: {formData.formData.name}</p>
          <p>メールアドレス: {formData.formData.email}</p>
          <button onClick={handlePage1Edit}>1を修正する</button>
          <p>都道府県: {formData.formData.prefectures}</p>
          <button onClick={handlePage2Edit}>2を修正する</button>
          <p>年齢: {formData.formData.age}</p>
          <button onClick={handlePage3Edit}>3を修正する</button>
        </>
      )}
      <button onClick={handleSubmit(onSubmit)}>送信</button>
    </>
  );
}

export default ConfirmPage;
