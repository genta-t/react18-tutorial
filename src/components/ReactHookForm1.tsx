import React, { useEffect } from 'react';
import InputFormItem from './form/InputFormItem';
import { emailRule, passwordRule, textRule } from './form/rules';
import PageLinks from './items/PageLinks';
import { useForm } from "react-hook-form";
import RadioButtonItem from './form/RadioButtonItem';

const ReactHookForm1Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    unregister,
    reset
  } = useForm<TypeReactHookForm1>({mode: "onChange"}); // "onBlur" | "onChange" | "onSubmit" | "onTouched" | "all"

  const selectedOption = watch("contentSelection");

  useEffect(() => { // unregisterの使い方
    if (selectedOption !== "period") unregister("periodChild");
    if (selectedOption !== "item") unregister("itemChild");
    if (selectedOption !== "platform") unregister("platformChild");
  },[ selectedOption, unregister ])

  const onSubmit = (data: TypeReactHookForm1) => {
    console.log(data);
    reset();
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
        <InputFormItem 
          title={"パスワード"}
          labelName={"password"}
          type={"password"}
          inputRegister={register}
          errorMessage={errors.password?.message}
          rule={passwordRule}
        />
        <legend>
          <p>問い合わせ</p>
          <div>
            <RadioButtonItem
              text={"期間"}
              valueAndId={"period"}
              name={"contentSelection"}
              ruleName={"問い合わせ"}
              radioButtonRegister={register}
            />
            {selectedOption === "period" &&
              <>
                {periodChildArray.map((c, i) => {
                  return(
                    <RadioButtonItem
                      key={i}
                      text={c.text}
                      valueAndId={c.valueAndId}
                      name={"periodChild"}
                      ruleName={"期間"}
                      radioButtonRegister={register}
                    />
                  )
                })}
                <p>{errors.periodChild?.message as React.ReactNode}</p>
              </>
            }
          </div>
          <div>
            <RadioButtonItem
              text={"商品"}
              valueAndId={"item"}
              name={"contentSelection"}
              ruleName={"問い合わせ"}
              radioButtonRegister={register}
            />
            {selectedOption === "item" && 
              <>
                {itemChildArray.map((c, i) => {
                  return(
                    <RadioButtonItem
                      key={i}
                      text={c.text}
                      valueAndId={c.valueAndId}
                      name={"itemChild"}
                      ruleName={"商品"}
                      radioButtonRegister={register}
                    />
                  )
                })}
                <p>{errors.itemChild?.message as React.ReactNode}</p>
              </>
            }
          </div>
          <div>
            <RadioButtonItem
              text={"プラットフォーム"}
              valueAndId={"platform"}
              name={"contentSelection"}
              ruleName={"問い合わせ"}
              radioButtonRegister={register}
            />
            {selectedOption === "platform" &&
              <>
                {platformChildArray.map((c, i) => {
                  return(
                    <RadioButtonItem
                      key={i}
                      text={c.text}
                      valueAndId={c.valueAndId}
                      name={"platformChild"}
                      ruleName={"プラットフォーム"}
                      radioButtonRegister={register}
                    />
                  )
                })}
                <p>{errors.platformChild?.message as React.ReactNode}</p>
              </>
            }
          </div>
          <p>{errors.contentSelection?.message as React.ReactNode}</p>
        </legend>
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