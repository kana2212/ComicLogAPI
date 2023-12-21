import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import CustomCheckbox from "../molecules/user/CustomCheckBox";
import { CustomTextField } from "../molecules/user/CustomTextField";

export const LogPage = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div style={{ textAlign: "center" }}>
        <Button
          sx={{ backgroundColor: "#66330e", color: "#fff", margin: "20px" }}
          onClick={handleClickOpen}
        >
          記録をつける
        </Button>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>コミック情報登録</DialogTitle>
        <DialogContent>
          <DialogContentText>読んだ漫画を記録しよう</DialogContentText>
          <CustomTextField
            id="serviceName"
            label="コミックサービス名"
            type="name"
          />
          <CustomTextField id="title" label="タイトル" type="name" />
          <CustomTextField id="volume" label="巻数" type="voluems" />
          <CustomCheckbox />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>戻る</Button>
          <Button onClick={handleClose}>登録</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
