import { Button } from "@mui/material";
import { memo, useState } from "react";
import { instance } from "../axios/config";
import { EditComicLog } from "./EditComicLog";

export const DeleteComicLog = memo((props) => {
  const { updateComicList } = props;
  const [updateServiceName, setUpdateServiceName] = useState("");
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateVolumes, setUpdateVolumes] = useState("");
  const [comicList, setComicList] = useState("");
  const [setAlert] = useState({ title: "", status: "" });

  const deleteComicList = async (id) => {
    try {
      await instance.delete(`/comiclogs/${id}`);

      const updatedResponse = await instance.get("/comiclogs");
      setComicList(updatedResponse.data);

      console.log("削除成功");
    } catch (err) {
      console.error(err);
      setAlert({ title: "削除失敗", status: "error" });
    }
  };

  return (
    <>
      <EditComicLog>
        <Button
          onClick={deleteComicList}
          variant="contained"
          sx={{ marginLeft: 2, bgcolor: "#448aff" }}
        >
          削除
        </Button>
      </EditComicLog>
    </>
  );

  //   return { resultComicLog, handleValueDelete, deleteComicList, DeleteComicLog };
});
