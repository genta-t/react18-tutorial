import NavComp from "./NavComp";
import { TypeCurrentUserId } from "../types";

const HeaderComp = ({ currentUserId, setCurrentUserId }: TypeCurrentUserId) => {
  return (
    <header>
      <h1>Acme Blogs</h1>
      <NavComp
        currentUserId={currentUserId}
        setCurrentUserId={setCurrentUserId}
      />
    </header>
  );
}

export default HeaderComp;
