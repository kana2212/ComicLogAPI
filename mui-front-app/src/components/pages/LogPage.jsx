import { Button, List, ListItem, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CreateComic } from "../../hooks/CreateCustomInput";
import HeaderLayout from "../atoms/layout/HeaderLayout";
import { CustomCheckBox } from "../molecules/user/CustomCheckBox";

export const LogPage = () => {
  const [comicServiceName, setComicServiceName] = useState("");
  const [comicTitle, setComicTitle] = useState("");
  const [volumes, setVolumes] = useState("");
  const [comicList, setComicList] = useState([]);
  const [isEdited, setIsEdited] = useState(false);
  const [editedId, setEditedId] = useState(null);

  const handleAddClick = () => {
    if (!isEdited) {
      setComicList([
        ...comicList,
        {
          comicServiceName,
          comicTitle,
          volumes,
          isDone: false,
          id: new Date().getTime(),
        },
      ]);
    } else {
      const updatedList = comicList.map((comic) =>
        comic.id === editedId
          ? {
              ...comic,
              comicServiceName,
              comicTitle,
              volumes,
            }
          : comic
      );
      setComicList(updatedList);
      setIsEdited(false);
      setEditedId(null);
    }
    setComicServiceName("");
    setComicTitle("");
    setVolumes("");
    CreateComic({
      comicServiceName,
      comicTitle,
      volumes,
      isDone: false,
      id: new Date().getTime(),
    });
  };

  const handleEdit = (id) => {
    const editedComic = comicList.find((comic) => comic.id === id);
    if (editedComic) {
      setComicServiceName(editedComic.comicServiceName || "");
      setComicTitle(editedComic.comicTitle || "");
      setVolumes(editedComic.volumes || null);
      setIsEdited(true);
      setEditedId(id);
    }
  };

  const handleDelete = (id) => {
    const newComicList = comicList.filter((comic) => comic.id !== id);
    setComicList(newComicList);
  };

  const isMaxLimitResister = comicList.length >= 3;
  const isDisabled = isMaxLimitResister && !isEdited;

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
        <TextField
          variant="outlined"
          onChange={(e) => setComicServiceName(e.target.value)}
          label="コミックサービス名"
          value={comicServiceName}
          sx={{ maxWidth: 360 }}
        />
        <TextField
          variant="outlined"
          onChange={(e) => setComicTitle(e.target.value)}
          label="タイトル"
          value={comicTitle}
          sx={{ maxWidth: 360 }}
        />
        <TextField
          variant="outlined"
          onChange={(e) => setVolumes(e.target.value)}
          label="巻数"
          value={volumes}
        />
        {isMaxLimitResister && (
          <p style={{ color: "red" }}>登録できる項目は3つまでです。</p>
        )}
        <Button
          size="medium"
          variant={!isMaxLimitResister || isEdited ? "outlined" : "contained"}
          sx={{ bgcolor: "text.secondary", color: "#fff", margin: "5px" }}
          onClick={handleAddClick}
          disabled={isDisabled}
        >
          {isEdited ? "再編集" : "登録する"}
        </Button>
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
                onClick={() => handleEdit(comic.id)}
                variant="contained"
                sx={{ marginLeft: 2, bgcolor: "#ffab40" }}
              >
                編集
              </Button>
              <Button
                onClick={() => handleDelete(comic.id)}
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
