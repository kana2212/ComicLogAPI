import React, { useState } from "react";

export const CustomCheckBox = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <form style={{ paddingLeft: "5px" }}>
      <input
        type="radio"
        id="themeChecked1"
        value="checked1"
        checked={selectedOption === "checked1"}
        onChange={handleChange}
      />
      <label htmlFor="themeChecked1">続</label>
      <input
        type="radio"
        id="themeChecked2"
        value="checked2"
        checked={selectedOption === "checked2"}
        onChange={handleChange}
      />
      <label htmlFor="themeChecked2">完結</label>
    </form>
  );
};
