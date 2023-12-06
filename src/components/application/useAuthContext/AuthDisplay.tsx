import { useContext } from "react";
import { AuthContext } from "../UseContext";

const AuthDisplay = () => {
  const auth = useContext(AuthContext);

  return (
    <>
      {auth?.userAuth ? 
        <p>ログイン中</p>
        :
        <p>ログアウト中</p>
      }
    </>
  );
}

export default AuthDisplay;