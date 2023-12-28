import { useState } from "react";
import { instance } from "../axios/config";

export const DeleteComicLog = (props) => {
  const { resultComicLog, handleValueDelete } = props;
  const [setAlert] = useState({ title: "", status: "" });

  const deleteComicList = (id) => {
    instance
      .delete("/comiclogs/" + id, { data: resultComicLog })
      .then((response) => {
        console.log(response);
        handleValueDelete(id);
        setAlert({ title: "削除成功", status: "success" });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return { resultComicLog, handleValueDelete, deleteComicList, DeleteComicLog };
};
