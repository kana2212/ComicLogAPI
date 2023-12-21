import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import * as React from "react";

export default function CustomCheckbox() {
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);

  const handleChange1 = (event) => {
    setChecked1(event.target.checked);
  };

  const handleChange2 = (event) => {
    setChecked2(event.target.checked);
  };

  return (
    <FormGroup row={true}>
      <FormControlLabel
        control={<Checkbox checked={checked1} onChange={handleChange1} />}
        label="続"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checked2}
            onChange={handleChange2}
            sx={{ "&.Mui-checked": { color: "red" } }}
          />
        }
        label="完結"
      />
    </FormGroup>
  );
}
