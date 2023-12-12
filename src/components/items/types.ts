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

export type TypeInitialState = {
  savings: number;
  histories: {
    operation: string;
    amount: number;
  }[];
}

export type TypeAction = {
  type: "DEPOSIT" | "WITHDRAW";
  payload: number;
}

export type TypesTitle = {
  title: string;
};

export type TypesSubTitle = {
  subTitle: string;
};

export type TypesCounter = {
  counterTitle: string;
  count: number;
};

export type TypesButton = {
  buttonText: string;
  onClick: () => void;
};

export type TypesForm = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export type TypesTooltipContainer = {
  children: any;
  x: number;
  y: number;
  contentRef: any;
};

export type TypesTooltip = {
  children: any;
  targetRect: any;
};

export type TypesTooltipContent = {
  tooltipContent: React.ReactNode;
  children?: React.ReactNode;
};

export type TypesSetTargetRect = {
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
} | null;