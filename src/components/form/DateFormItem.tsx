import React from 'react';

const DateFormItem = ({
  title,
  labelName,
  dateRegister,
  errorMessage,
  rule,
  requiredItemFlag = true,
}: TypeDateFormItem) => {
  
  return (
    <>
      <label htmlFor={labelName}>{title}</label>
      <input type="date"
        {...requiredItemFlag
          ? dateRegister(
              labelName,
              {
                required: `${title}を入れて`,
                validate: rule
              }
            )
          : dateRegister(labelName)
        }
        />
        <p>{requiredItemFlag ? errorMessage as React.ReactNode : ""}</p>
    </>
  );
}

export default DateFormItem;

type TypeDateFormItem = {
  title: string;
  labelName: string;
  dateRegister: any;
  errorMessage: any;
  rule?: any;
  requiredItemFlag?: boolean;
}
