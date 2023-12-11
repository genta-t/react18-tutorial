import { createContext } from 'react';
import PageLinks from './items/PageLinks';

export type TypeFromDataContext = {
  formData?: TypeReactHookForm3;
  updateData?: (data: TypeReactHookForm3) => void;
}

export type TypeReactHookForm3 = {
  name: string;
  email: string;
  prefectures: string;
  age?: number;
}

export const FormDataContext = createContext<TypeFromDataContext | undefined>(undefined); //デフォルト値を設定するために空はundefined;
export const FormDataProvider = FormDataContext.Provider;

const ReactHookForm3Page = () => {
  return (
    <>
      <PageLinks link={"/react-hook-form-3"}/>
      <p>ReactHookForm3</p>
    </>
  );
}

export default ReactHookForm3Page;
