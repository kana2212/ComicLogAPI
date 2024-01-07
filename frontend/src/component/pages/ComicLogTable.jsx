import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React from "react";
import { instance } from "../../axios/config";
import { useComicInput } from "../../hooks/provider/ComicInputProvider";
import { useMessage } from "../../hooks/useMessage";

export default function ComicLogTable() {
  const { comicList, setComicList } = useComicInput();
  const { notifySuccess, notifyError } = useMessage();

  const deleteComicList = (id) => {
    console.log("Deleting comic with ID:", id);
    if (id !== null && id !== undefined) {
      instance
        .delete("/comiclogs/" + id)
        .then((response) => {
          console.log(response);
          setComicList(comicList.filter((comic) => comic.id !== id));
          notifySuccess("削除成功");
        })
        .catch((e) => {
          console.log(e);
          notifyError("削除失敗");
        });
    } else {
      console.error("無効なIDです");
    }
  };

  return (
    <TableContainer>
      <Table>
        <TableBody>
          {comicList.map((comic) => (
            <TableRow key={comic.id}>
              <TableCell>{comic.comicServiceName}</TableCell>
              <TableCell>{comic.comicTitle}</TableCell>
              <TableCell>{comic.volumes}</TableCell>
              <TableCell>{comic.status}</TableCell>
              <TableCell>
                <Button
                  onClick={() => deleteComicList(comic.id)}
                  variant="contained"
                  sx={{ bgcolor: "#448aff" }}
                >
                  削除
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
