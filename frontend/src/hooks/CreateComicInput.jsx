import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { instance } from "../axios/config";

export const CreateComicInput = () => {
  const handleValueChange = (newValue) => {
    setComicList(newValue);
  };
  const [comicServiceName, setComicServiceName] = useState("");
  const [comicTitle, setComicTitle] = useState("");
  const [volumes, setVolumes] = useState("");
  const [comicList, setComicList] = useState([]);
  const [alert, setAlert] = useState({ title: "", status: "" });

  const onChangeNewServiceName = (e) => setComicServiceName(e.target.value);
  const onChangeNewTitle = (e) => setComicTitle(e.target.value);
  const onChangeNewVolumes = (e) => setVolumes(e.target.value);

  const onClickRegistration = async () => {
    try {
      const response = await instance.post("/comiclogs", {
        comicServiceName,
        comicTitle,
        volumes,
      });
      console.log(response);
      setComicServiceName("");
      setComicTitle("");
      setVolumes("");
      setAlert({ title: "登録成功", status: "success" });

      const updatedResponse = await instance.get(
        "http://localhost:8080/comiclogs"
      );
      handleValueChange(updatedResponse.data);
    } catch (err) {
      console.error(err);
      setAlert({ title: "登録失敗", status: "error" });
    }
  };

  const isMaxLimitRegister = comicList.length >= 3;

  return (
    <>
      <TextField
        variant="outlined"
        onChange={onChangeNewServiceName}
        label="コミックサービス名"
        value={comicServiceName}
        sx={{ maxWidth: 360 }}
      />
      <TextField
        variant="outlined"
        onChange={onChangeNewTitle}
        label="タイトル"
        value={comicTitle}
        sx={{ maxWidth: 360 }}
      />
      <TextField
        variant="outlined"
        onChange={onChangeNewVolumes}
        label="巻数"
        value={volumes}
      />
      {isMaxLimitRegister && (
        <p style={{ color: "red" }}>登録できる項目は3つまでです。</p>
      )}
      <Button
        size="medium"
        variant="outlined"
        sx={{ bgcolor: "text.secondary", color: "#fff", margin: "5px" }}
        onClick={onClickRegistration}
        disabled={isMaxLimitRegister}
      >
        登録
      </Button>
    </>
  );

  // return {
  //   comicServiceName,
  //   setComicServiceName,
  //   comicTitle,
  //   setComicTitle,
  //   volumes,
  //   setVolumes,
  //   onClickRegistration,
  // };
};
