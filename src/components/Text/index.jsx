import React from "react";

const sizeClasses = {
  txtSairaCondensedBold32: "font-bold font-sairacondensed",
  txtSairaCondensedRegular30: "font-normal font-sairacondensed",
  txtSairaCondensedBold36: "font-bold font-sairacondensed",
  txtSairaCondensedBold130: "font-bold font-sairacondensed",
  txtSairaCondensedRegular24: "font-normal font-sairacondensed",
  txtSairaCondensedBold50WhiteA700: "font-bold font-sairacondensed",
  txtSairaCondensedBold50: "font-bold font-sairacondensed",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
