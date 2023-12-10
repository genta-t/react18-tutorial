import { Link } from 'react-router-dom';
import { useContext } from 'react';
import InputFormItem from '../form/InputFormItem';
import { emailRule, textRule } from '../form/rules';
import { useForm } from "react-hook-form";
import { FormDataContext } from '../ReactHookForm3';

const Part1Page = () => {
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
      <Link to={"/react-hook-form-3-2"} style={{ marginRight: "8px"}}>Part2</Link>
      <p>Part1</p>
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

export type TypeReactHookForm3 = {
  name: string;
  email: string;
  password: string;
  prefectures: string;
  contentSelection: "period" | "platform" | "item"; 
  periodChild: "1month" | "2month" | "3month";
  itemChild: "MHW" | "MHR" | "MHX";
  platformChild: "PS5 & PS4" | "Switch" | "Steam" | "Xbox";
  option: string;
}

const periodChildArray = [
  {
    text: "1ヶ月",
    valueAndId: "1month"
  },
  {
    text: "2ヶ月",
    valueAndId: "2month"
  },
  {
    text: "3ヶ月",
    valueAndId: "3month"
  },
];

const itemChildArray = [
  {
    text: "MHW",
    valueAndId: "MHW"
  },
  {
    text: "MHR",
    valueAndId: "MHR"
  },
  {
    text: "MHX",
    valueAndId: "MHX"
  },
];

const platformChildArray = [
  {
    text: "PS5 & PS4",
    valueAndId: "PS5 & PS4"
  },
  {
    text: "Switch",
    valueAndId: "Switch"
  },
  {
    text: "Steam",
    valueAndId: "Steam"
  },
  {
    text: "Xbox",
    valueAndId: "Xbox"
  },
];