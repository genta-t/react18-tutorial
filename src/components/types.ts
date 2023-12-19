export type TypeFromDataContext = {
  formData?: TypeReactHookForm3;
  updateData?: (data: TypeReactHookForm3) => void;
}

export type TypeReactHookForm3 = {
  name: string;
  email: string;
  prefectures: string;
  attachment: any;
  age?: number | null;
}

export type TypeCurrentUserId = {
  currentUserId: any;
  setCurrentUserId: any;
}

export type TypePostUser = {
  post: any;
  user: any;
}

export type TypePost = {
  userId: number;
  id: number;
  title: string;
  body: string;
}