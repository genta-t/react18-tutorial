import { useContext } from "react";
import { AuthContext } from "../UseContext";

const AuthButton = () => {
  const auth = useContext(AuthContext);

  const handleSignIn = () => {
    auth?.setUserAuth(true);
  };

  const handleSignOut = () => {
    auth?.setUserAuth(false);
  };

  return (
    <>
      {auth?.userAuth ? 
        <button onClick={handleSignOut}>ログアウト</button>
        :
        <button onClick={handleSignIn}>ログイン</button>
      }
    </>
  );
}

export default AuthButton;
