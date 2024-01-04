import { Button } from "@mui/material";
import { memo, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { instance } from "../axios/config";
import { useComicInput } from "./ComicInputProvider";

export const EditComicLog = memo((props) => {
  const { updateComicList, setUpdateComicList } = props;
  const { id } = useParams();
  const { inputData } = useComicInput();

  const navigate = useNavigate();

  const [updateServiceName, setUpdateServiceName] = useState("");
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateVolumes, setUpdateVolumes] = useState("");

  const onChangeUpdateServiceName = (e) => setUpdateServiceName(e.target.value);
  const onChangeUpdateTitle = (e) => setUpdateTitle(e.target.value);
  const onChangeUpdateVolumes = (e) => setUpdateVolumes(e.target.value);

  useEffect(() => {
    setUpdateServiceName(updateComicList?.comicServiceName ?? "");
    setUpdateTitle(updateComicList?.comicTitle ?? "");
    setUpdateVolumes(updateComicList?.volumes ?? "");
  }, [updateComicList]);

  const onClickUpdate = async () => {
    try {
      const response = await instance.patch(`/comiclogs/${id}`, {
        comicServiceName: updateServiceName,
        comicTitle: updateTitle,
        volumes: updateVolumes,
      });
      const updatedResponse = await instance.get(`/comiclogs/${id}`);
      setUpdateComicList(updatedResponse.data);
      toast.success("登録成功");
    } catch (err) {
      toast.error("登録失敗");
      navigate("/logpage");
    }
  };

  return (
    <form onSubmit={onClickUpdate}>
      <>
        <Button
          type="submit"
          size="medium"
          variant="outlined"
          sx={{ bgcolor: "text.secondary", color: "#fff", margin: "5px" }}
        >
          編集
        </Button>
      </>
    </form>
  );
});
