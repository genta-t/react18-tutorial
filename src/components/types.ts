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