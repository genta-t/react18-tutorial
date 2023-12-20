import { useState, useEffect } from "react";

const User = ({ id } : TypeUser) => {
  const [user, setUser] = useState<TypeUserState | null>(null);

  const fetchUserData = async (id: string | undefined) => {
    const response = await fetch("/" + id);
    setUser(await response.json());
  }

  useEffect(() => {
    fetchUserData(id);
  }, [id]);

  if (!user) {
    return "loading...";
  }

  return (
    <details>
      <summary>{user.name}</summary>
      <strong>{user.age}</strong> years old
      <br />
      lives in {user.address}
    </details>
  );
}

export default User;

type TypeUser = {
  id?: string;
}

type TypeUserState = {
  name: string;
  age: string;
  address: string;
}