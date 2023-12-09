import PageLinks from './items/PageLinks';
import { useFieldArray, useForm, useWatch, Control } from "react-hook-form";

const ReactHookForm4Page = () => {
  const {
    register,
    formState: { errors },
    control,
    handleSubmit
  } = useForm<TypeReactHookForm4>({
    defaultValues: {
      cart: [{
        name: "",
        amount: 0
      }]
    }
  });

  const { fields, append, prepend, remove } = useFieldArray({
    name: "cart",
    control,
    rules: {
      required: "入力してね"
    }
  });

  const onSubmit = (data: TypeReactHookForm4) => {
    const totalAmount = getTotal(data.cart);
    const totalData = { ...data, totalAmount}
    console.log("data", totalData);
  }

  console.log("errors", errors);
  return (
    <>
      <PageLinks link={"/react-hook-form-4"}/>
      <p>ReactHookForm3</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => {
          return(
            <section key={field.id}>
              <label>
                name
                <input {...register(`cart.${index}.name`, {required: true})} />
              </label>
              <label>
                amount
                <input type='number' {...register(`cart.${index}.amount`, { valueAsNumber: true })} />
              </label>
              <button onClick={() => remove(index)}>remove</button>
            </section>
          )
        })}
        <button onClick={() => append({name: "append", amount: 0})}>append</button>
        <button onClick={() => prepend({name: "prepend", amount: 0})}>prepend</button>
        <p>{errors.cart?.root?.message}</p>
        <TotalAmount control={control}/>
        <button type='submit'>送信</button>
      </form>
    </>
  );
}

export default ReactHookForm4Page;

const TotalAmount = ({control} : { control: Control<TypeReactHookForm4>}) => {
  const cartValues = useWatch({
    name: "cart",
    control,
  });

  return <p>{getTotal(cartValues)}</p>
}

export const getTotal = (payload: TypeReactHookForm4["cart"]) => {
  let total = 0;

  for (const item of payload) {
    total = total + (Number.isNaN(item.amount) ? 0 : item.amount);
  }

  return total;
}

type TypeReactHookForm4 = {
  cart: {
    name: string;
    amount: number;
  }[];
}

