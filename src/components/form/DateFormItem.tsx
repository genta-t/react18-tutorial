import React from 'react';

const DateFormItem = ({
  title,
  labelName,
  dateRegister,
  errorMessage,
  rule,
}: TypeDateFormItem) => {
  
  return (
    <>
      <label htmlFor={labelName}>{title}</label>
      <input type="date"
        {...dateRegister(labelName, {
          required: `${title}を入れて`,
          validate: rule
        })}
        />
        <p>{errorMessage as React.ReactNode}</p>
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
}
