import { Button, List, ListItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CreateComicInput } from "../../hooks/CreateComicInput";
import { DeleteComicLog } from "../../hooks/DeleteComicLog";
import { EditComicLog } from "../../hooks/EditComicLog";
import HeaderLayout from "../atoms/HeaderLayout";
import { CustomCheckBox } from "../molecules/user/CustomCheckBox";

export const LogPage = () => {
  const { onClickRegistration } = CreateComicInput;

  const { onClickUpdate } = EditComicLog;

  const { deleteComicList } = DeleteComicLog;

  const [comicList] = useState([]);

  // const onChangeNewServiceName = (e) => setComicServiceName(e.target.value);
  // const onChangeNewTitle = (e) => setComicTitle(e.target.value);
  // const onChangeNewVolumes = (e) => setVolumes(e.target.value);

  // const isMaxLimitRegister = comicList.length >= 3;

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
    >
      <div style={{ width: "50%" }}>
        <Link to="/">
          <HeaderLayout />
        </Link>
        <Typography variant="h6" sx={{ paddingBottom: "10ox" }}>
          お試し登録は3つまでです。
        </Typography>
        <CreateComicInput />
        {/* <TextField
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
        </Button> */}
        <List style={{ display: "block" }}>
          {comicList.map((comic) => (
            <ListItem divider key={comic.id}>
              <Typography
                style={{ color: comic.isDone ? "green" : "" }}
                sx={{ justifyContent: "space-around" }}
              >
                {comic.comicServiceName} - {comic.comicTitle} - {comic.volumes}{" "}
              </Typography>
              <CustomCheckBox />
              <Button
                onClick={() => onClickUpdate(comic.id)}
                variant="contained"
                sx={{ marginLeft: 2, bgcolor: "#ffab40" }}
              ></Button>
              <Button
                size="medium"
                variant="outlined"
                sx={{ bgcolor: "text.secondary", color: "#fff", margin: "5px" }}
                onClick={onClickRegistration}
              >
                登録
              </Button>
              <Button
                onClick={() => deleteComicList(comic.id)}
                variant="contained"
                sx={{ marginLeft: 2, bgcolor: "#448aff" }}
              >
                削除
              </Button>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};
