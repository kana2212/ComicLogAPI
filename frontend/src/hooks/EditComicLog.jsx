import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { instance } from "../axios/config";

export const EditComicLog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [comicServiceName, setComicServiceName] = useState("");
  const [comicTitle, setComicTitle] = useState("");
  const [volumes, setVolumes] = useState("");
  const [comicList, setComicList] = useState([]);
  const [setAlert] = useState({ title: "", status: "" });

  useEffect(() => {
    instance
      .get("/comiclogs/" + id)
      .then((response) => {
        setComicList(response.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const changeComicLog = (comicServiceName, comicTitle, volumes) => {
    setComicServiceName(comicServiceName);
    setComicTitle(comicTitle);
    setVolumes(volumes);
  };

  const onClickUpdate = async (id) => {
    try {
      const response = await instance.patch(`/comiclogs/${id}`, {
        comicServiceName: comicServiceName,
        comicTitle: comicTitle,
        volumes: volumes,
      });
      console.log(response);
      setAlert({ title: "登録成功", status: "success" });
    } catch (err) {
      console.error(err);
      setAlert({ title: "登録失敗", status: "error" });
    }
    navigate("/logpage");
  };

  return {
    comicServiceName,
    setComicServiceName,
    comicTitle,
    setComicTitle,
    volumes,
    setVolumes,
    comicList,
    setComicList,
    changeComicLog,
    onClickUpdate,
    EditComicLog,
  };
};
