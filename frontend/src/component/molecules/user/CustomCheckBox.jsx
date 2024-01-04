import React from "react";

export const CustomCheckBox = ({ handleCheckBoxChange }) => {
  const handleChange = (e) => {
    handleCheckBoxChange(e.target.value);
  };

  return (
    <div style={{ paddingLeft: "5px" }}>
      {" "}
      <input
        type="radio"
        name="status"
        id="themeChecked1"
        value="続"
        onChange={handleChange}
      />
      <label htmlFor="themeChecked1">続</label>
      <input
        type="radio"
        name="status"
        id="themeChecked2"
        value="完結"
        onChange={handleChange}
      />
      <label htmlFor="themeChecked2">完結</label>
    </div>
  );
};
