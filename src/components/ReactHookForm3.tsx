import { createContext } from 'react';
import PageLinks from './items/PageLinks';
import { Link } from 'react-router-dom';
import { TypeFromDataContext } from './types';

export const FormDataContext = createContext<TypeFromDataContext | undefined>(undefined); //デフォルト値を設定するために空はundefined;
export const FormDataProvider = FormDataContext.Provider;

const ReactHookForm3Page = ({ defaultLink = "" } : { defaultLink?: string }) => {
  return (
    <>
      <PageLinks link={"/react-hook-form-3"}/>
      <p>ReactHookForm3</p>
      {defaultLink && <Link to={defaultLink}>フォーム画面へ</Link>}
    </>
  );
}

export default ReactHookForm3Page;
