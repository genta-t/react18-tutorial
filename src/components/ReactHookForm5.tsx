import InputFormItem from './form/InputFormItem';
import PullDownItem from './form/PullDownItem';
import { emailRule, passwordRule, phoneNumberRule, textRule } from './form/rules';
import PageLinks from './items/PageLinks';
import { useFieldArray, useForm } from "react-hook-form";

const ReactHookForm5Page = () => {
  const appendDefaultValue = {
    name: "",
    email: "",
    tel: "",
    password: "",
    capcomGame: "",
  }

  const {
    register,
    formState: { errors },
    control,
    handleSubmit
  } = useForm<TypeReactHookForm5>({
    mode: "onChange",
    defaultValues: {
      item: [
        appendDefaultValue
      ]
    }
  });

  const { fields, append, remove } = useFieldArray({
    name: "item",
    control,
  });

  const onSubmit = (data: TypeReactHookForm5) => {
    console.log("data", data);
  }

  return (
    <>
      <PageLinks link={"/react-hook-form-5"}/>
      <p>ReactHookForm5</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => {
          return(
            <div key={field.id}>
              <InputFormItem
                title={"名前"}
                labelName={`item.${index}.name`}
                type={"text"}
                inputRegister={register}
                errorMessage={errors.item?.[index]?.name?.message}
                rule={textRule("名前")}
                placeholder={"山田 太郎"}
              />
              <InputFormItem 
                title={"メールアドレス"}
                labelName={`item.${index}.email`}
                type={"email"}
                inputRegister={register}
                errorMessage={errors.item?.[index]?.email?.message}
                rule={emailRule}
                placeholder={"sample@gmail.com"}
              />
              <InputFormItem 
                title={"電話番号"}
                labelName={`item.${index}.tel`}
                type={"text"}
                inputRegister={register}
                errorMessage={errors.item?.[index]?.tel?.message}
                rule={phoneNumberRule}
              />
              <InputFormItem 
                title={"パスワード"}
                labelName={`item.${index}.password`}
                type={"password"}
                inputRegister={register}
                errorMessage={errors.item?.[index]?.password?.message}
                rule={passwordRule}
              />
              <PullDownItem
                title={"カプコンゲーム"}
                labelName={`item.${index}.capcomGame`}
                pullDownRegister={register}
                array={capcomGameArray}
              />
              <div>
                <button onClick={() => remove(index)}>削除</button>
              </div>
            </div>
          );
        })}
        <div>
          <button onClick={() => append(appendDefaultValue)}>追加</button>
          <button type='submit'>送信</button>
        </div>
      </form>
    </>
  );
}

export default ReactHookForm5Page;

type TypeReactHookForm5 = {
  item : TypeFromItem[]
}

type TypeFromItem = {
  name: string;
  email: string;
  tel: string;
  password: string;
  capcomGame: string;
}

const capcomGameArray = [
  {
    text: "",
    value: ""
  },
  {
    text: "モンハン",
    value: "mh"
  },
  {
    text: "ストリートファイター",
    value: "sf"
  },
  {
    text: "ロックマン",
    value: "lockMan"
  },
  {
    text: "逆転裁判",
    value: "gyakuten"
  },
  {
    text: "バイオハザード",
    value: "biohazard"
  },
  {
    text: "エグゾプライマル",
    value: "exoPrimal"
  },
  {
    text: "ドラゴンズドグマ",
    value: "dragonsDogma"
  },
  {
    text: "デビルメイクライ",
    value: "devilMayCry"
  },
];

