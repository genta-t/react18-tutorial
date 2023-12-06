import { createContext, useState } from "react";
import { AuthProviderProps, TypeUserAuth } from "../items/types";
import UserAuth from "./useAuthContext/UserAuth";

export const AuthContext = createContext<TypeUserAuth | null>(null);

const UseContext = () => {
  
  return (
    <>
      <AuthProvider>
        <h2>useContext</h2>
        <UserAuth />
        <hr /> 
      </AuthProvider>
    </>
  );
}

export default UseContext;

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [ userAuth, setUserAuth ] = useState(false);
  return (
    <>
      <AuthContext.Provider value={{ userAuth, setUserAuth }}>
        {children}
      </AuthContext.Provider>
    </>
  )
}
