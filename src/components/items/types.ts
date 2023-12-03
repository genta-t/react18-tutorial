type FormField = 'firstName' | 'lastName' | 'email';

export type FormArrayElement = {
  name: string;
  type: string;
  value: FormField;
};

export type TypesTodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TypesPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type TypesItem = {
  id: number;
  title: string;
};

export type TypesResource = "todos" | "posts";

export type AuthProviderProps = {
  children: React.ReactNode;
}

export type TypeUserAuth = {
  userAuth: boolean;
  setUserAuth: React.Dispatch<React.SetStateAction<boolean>>;
}