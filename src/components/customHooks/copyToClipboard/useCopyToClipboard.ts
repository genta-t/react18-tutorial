import { useState } from "react"
import copy from 'copy-to-clipboard';

type TypeOptions = {
  debug?: boolean;
  message?: string;
};

type TypeUseCopyToClipboard = [
  (text: string, options?: TypeOptions) => void,
  {
    value: string | undefined;
    success: boolean | undefined;
    setSuccess: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  }
];

export const useCopyToClipboard = (): TypeUseCopyToClipboard => {
  const [ value, setValue ] = useState<string | undefined>();
  const [ success, setSuccess ] = useState<boolean | undefined>();

  const copyToClipboard = (text: string, options?: TypeOptions) => {
    const result = copy(text, options);
    if (result) setValue(text);
    setSuccess(result);
  }
  return [copyToClipboard, { value, success, setSuccess } ];
}
