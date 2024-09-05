import React from "react";

const Button = (props) => {
  const { text, bg, isRounded, fullWidth, width, moreStyles, ...restProps } =
    props;

  return (
    <button
      className={`bg-${bg ? bg : "darkGreen"} ${
        isRounded ? "rounded-xl" : ""
      } ${fullWidth ? "w-full" : ""} ${
        width ? `w-[${width}rem]` : ""
      } min-h-12 ${moreStyles} text-ourWhite`}
      {...restProps}
    >
      {text}
    </button>
  );
};

export default Button;
