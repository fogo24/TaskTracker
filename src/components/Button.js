import React from "react";

const Button = ({ onClick, text, color }) => {
  return (
    <>
      <button
        onClick={onClick}
        style={{
          backgroundColor: color,
          width: "90px",
          color: "white",
          height: "45px",
        }}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
