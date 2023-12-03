type FormField = 'firstName' | 'lastName' | 'email';

export type FormArrayElement = {
  name: string;
  type: string;
  value: FormField;
};