import {
  Button,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import { instance } from "../../axios/config";
import EditComicForm from "../../hooks/EditComicForm";
import { useComicInput } from "../../hooks/provider/ComicInputProvider";
import { useMessage } from "../../hooks/useMessage";

export default function ComicLogTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { comicList, setComicList } = useComicInput();
  const { notifySuccess, notifyError, MessageSnackbar } = useMessage();

  const [editingComic, setEditingComic] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const startEditing = (comic) => {
    setEditingComic(comic);
    setIsEditing(true);
    handleOpenModal(comic);
  };

  const handleOpenModal = (comic) => {
    setEditingComic(comic);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingComic(null);
  };

  const handleUpdateComic = async (updatedComic) => {
    if (editingComic && editingComic.id) {
      try {
        await instance
          .patch(`/comiclogs/${editingComic.id}`, updatedComic)
          .then(() => {
            setComicList((currentList) =>
              currentList.map((comic) =>
                comic.id === editingComic.id ? updatedComic : comic
              )
            );
            notifySuccess("更新成功");
          });
      } catch (error) {
        console.error(error);
        notifyError("更新失敗");
      } finally {
        setEditingComic(null);
        setIsEditing(false);
        handleCloseModal();
      }
    } else {
      console.error("無効なID");
    }
  };

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
    <div>
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ backgroundColor: "white", padding: "20px" }}>
          {editingComic && (
            <EditComicForm comic={editingComic} onSubmit={handleUpdateComic} />
          )}
        </div>
      </Modal>
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
                    onClick={() => startEditing(comic)}
                    variant="contained"
                    sx={{ bgcolor: "#E3D026", color: "#fff" }}
                  >
                    編集
                  </Button>
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
      <MessageSnackbar />
    </div>
  );
}
