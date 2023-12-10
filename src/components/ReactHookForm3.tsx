import { createContext, useState } from 'react';
import PageLinks from './items/PageLinks';
import Part1Page, { TypeReactHookForm3 } from './ spanningPages/Part1Page';
import Part2Page from './ spanningPages/Part2Page';

type TypeFromDataContext = {
  formData?: any;
  updateData?: (data: TypeReactHookForm3) => void;
}

export const FormDataContext = createContext<TypeFromDataContext | undefined>(undefined); //デフォルト値を設定するために空はnull;
export const FormDataProvider = FormDataContext.Provider;

const ReactHookForm3Page = () => {
  const [ formData, setFormData ] = useState({});

  const updateData = (newData: any) => {
    setFormData({ ...formData, ...newData});
  }
  
  return (
    <>
      <PageLinks link={"/react-hook-form-3"}/>
      <p>ReactHookForm3</p>
      <FormDataProvider value={{ formData, updateData }}>
        <Part1Page />
        <Part2Page />
      </FormDataProvider>
    </>
  );
}

export default ReactHookForm3Page;
