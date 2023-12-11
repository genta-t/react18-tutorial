import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { FormDataContext } from '../ReactHookForm3';
import { NavigateFunction } from 'react-router-dom';
import { TypeFromDataContext, TypeReactHookForm3 } from '../types';

export const useFormPartContext = () => {
  const formPartData = useContext(FormDataContext);
  const formMethods = useForm<TypeReactHookForm3>({
    mode: "onChange",
    defaultValues: formPartData?.formData
  });

  return { formPartData, ...formMethods };
}

export const onSubmit = (
  fromPartData: TypeFromDataContext,
  path: string,
  navigate: NavigateFunction
) => {
  return (data: TypeReactHookForm3) => {
    if (fromPartData && fromPartData.updateData) fromPartData.updateData(data);
    console.log("fromPartData", fromPartData);
    console.log("afterData", data);
    navigate(path);
  }
}