import PageLinks from './items/PageLinks';
import { useForm } from "react-hook-form";


const ReactHookForm3Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, dirtyFields,touchedFields, isSubmitted, isSubmitSuccessful, isSubmitting, isLoading, submitCount, isValidating,  },
    watch,
    setValue,
    reset,
    trigger,
    setError,
    control
  } = useForm<TypeReactHookForm3>({mode: "onChange", defaultValues: {name: ""}, criteriaMode: "all"}); // "onBlur" | "onChange" | "onSubmit" | "onTouched" | "all"


  const onSubmit = (data: TypeReactHookForm3) => {
    console.log("data", data);
    // console.log("isDirty", isDirty);
  }
  // console.log("isDirty, dirtyFields", isDirty, dirtyFields);
  // console.log("touchedFields", touchedFields);
  console.log("errors", errors);
  return (
    <>
      <PageLinks link={"/react-hook-form-3"}/>
      <p>ReactHookForm3</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name", {minLength: 4})} placeholder='name' />
        <button type='submit'>送信</button>
        {/* <button onClick={() => setValue("name", "ビル", {shouldValidate: true })}>setValue</button>
        <button onClick={() => reset()}>reset</button>
        <button onClick={() => trigger()}>trigger</button> */}
        <button onClick={() => setError("name", {types: {test: "間違っっている１１"}})}>setError</button>
        <p>{errors.name?.types?.test}</p>
      </form>
    </>
  );
}

export default ReactHookForm3Page;

type TypeReactHookForm3 = {
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
