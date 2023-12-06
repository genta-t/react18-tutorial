import InputFormItem from './form/InputFormItem';
import { emailRule, passwordRule, textRule } from './form/rules';
import PageLinks from './items/PageLinks';
import { useForm } from "react-hook-form";

const ReactHookForm1Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeReactHookForm1>({ mode: "onChange"}); // "onBlur" | "onChange" | "onSubmit" | "onTouched" | "all"

  const onSubmit = (data: TypeReactHookForm1) => {
    console.log(data)
  }
  
  return (
    <>
      <PageLinks link={"/react-hook-form-1"}/>
      <p>ReactHookForm1</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputFormItem 
          title={"名前"}
          labelName={"name"}
          type={"text"}
          register={register}
          errorMessage={errors.name?.message}
          rule={textRule("名前")}
        />
        <InputFormItem 
          title={"メールアドレス"}
          labelName={"email"}
          type={"email"}
          register={register}
          errorMessage={errors.email?.message}
          rule={emailRule}
        />
        <InputFormItem 
          title={"パスワード"}
          labelName={"password"}
          type={"password"}
          register={register}
          errorMessage={errors.password?.message}
          rule={passwordRule}
        />
        <button type='submit'>送信</button>
      </form>
    </>
  );
}

export default ReactHookForm1Page;

type TypeReactHookForm1 = {
  name: string;
  email: string;
  password: string;
}
