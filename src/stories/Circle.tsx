import React from 'react';

type TypesCircle = {
/**
 * 指定する色です
 */
  variant : "orange" | "green" | "yellow"
}

const Circle = ({ variant } : TypesCircle) => {
  return (
    <>
    <div
      style={{
        backgroundColor: `${variant}`,
        width: "16px",
        height: "16px",
        padding: "4px",
        borderRadius: "50%"
      }}
    />
    </>
  );
}

export default Circle;
