import { TextField } from "@mui/material";

export const CustomTextField = ({ id, label, type }) => {
  return (
    <TextField
      autoFocus
      margin="dense"
      id={id}
      label={label}
      type={type}
      fullWidth
      variant="standard"
    />
  );
};
