import React from "react";

const InputField = ({ type, value, placeholder, onChange, errorMessage }) => {
  return (
    <>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <p>{errorMessage}</p>
    </>
  );
};

export default InputField;
