import React from "react";

const Button = (props) => {
  const {
    text,
    bg = "darkGreen",
    isRounded,
    fullWidth,
    width,
    moreStyles,
    ...restProps
  } = props;

  const background = bg !== "" ? bg : "darkGreen";

  return (
    <button
      className={`bg-${background} ${isRounded ? "rounded-xl" : ""} ${
        fullWidth ? "w-full" : ""
      } ${width ? `w-[${width}rem]` : ""} min-h-12 ${moreStyles} text-ourWhite`}
      {...restProps}
    >
      {text}
    </button>
  );
};

export default Button;
