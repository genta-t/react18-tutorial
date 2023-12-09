import InputFormItem from './form/InputFormItem';
import { emailRule, passwordRule, textRule, previousDate, ageConfirmation } from './form/rules';
import PageLinks from './items/PageLinks';
import { useForm } from "react-hook-form";
import DateFormItem from './form/DateFormItem';
import PullDownItem from './form/PullDownItem';
import FileItem from './form/FileItem';
import CheckBoxItem from './form/CheckBoxItem';

const ReactHookForm2Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue
  } = useForm<TypeReactHookForm2>({mode: "onChange"}); // "onBlur" | "onChange" | "onSubmit" | "onTouched" | "all"

  const confPasswordRule = {
    required: "パスワードは必須です〜",
    validate : (value: string) => value === watch("password") || "パスワードが一致しません。"
  }

  const onSubmit = (data: TypeReactHookForm2) => {
    console.log("data", data);
  }
  
  return (
    <>
      <PageLinks link={"/react-hook-form-2"}/>
      <p>ReactHookForm2</p>
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
        <InputFormItem 
          title={"確認パスワード"}
          labelName={"confPassword"}
          type={"password"}
          inputRegister={register}
          errorMessage={errors.confPassword?.message}
          rule={confPasswordRule}
        />
        <DateFormItem 
          title={"生年月日"}
          labelName={"dateOfBirth"}
          dateRegister={register}
          errorMessage={errors.dateOfBirth?.message}
          rule={previousDate('2023-01-01', '2023')}
        />
        <DateFormItem 
          title={"年齢確認"}
          labelName={"ageConfirmation"}
          dateRegister={register}
          errorMessage={errors.ageConfirmation?.message}
          rule={ageConfirmation(2)}
          requiredItemFlag={false}
        />
        <PullDownItem 
          title={"好きな国"}
          labelName={"favoriteCountry"}
          pullDownRegister={register}
          array={favoriteCountryArray}
        />
        {watch("favoriteCountry") === "japan" && (
          <InputFormItem 
            title={"都道府県"}
            labelName={"prefectures"}
            type={"text"}
            inputRegister={register}
            errorMessage={errors.prefectures?.message}
            rule={textRule("都道府県")}
            placeholder={"鹿児島"}
          />
        )}
        <FileItem 
          title={"添付ファイル"}
          labelName={"attachment"}
          fileRegister={register}
          errorMessage={errors.attachment?.message}
        />
        <CheckBoxItem
          title={"利用規約"}
          requiredMessage={"利用規約に同意してください"}
          labelName={"termsOfService"}
          checkBoxRegister={register}
          errorMessage={errors.termsOfService?.message}
        />
        <button type='submit'>送信</button>
        <pre>
          {JSON.stringify(watch(), null, 2)}
        </pre>
      </form>
    </>
  );
}

export default ReactHookForm2Page;

type TypeReactHookForm2 = {
  name: string;
  email: string;
  password: string;
  confPassword: string;
  dateOfBirth: string;
  favoriteCountry: string;
  attachment: string;
  termsOfService: string;
  prefectures: string;
  fileName: string;
  ageConfirmation: string;
}

const favoriteCountryArray = [
  {
    text: "日本",
    value: "japan"
  },
  {
    text: "アメリカ",
    value: "usa"
  },
  {
    text: "台湾",
    value: "Taipei"
  },
];
