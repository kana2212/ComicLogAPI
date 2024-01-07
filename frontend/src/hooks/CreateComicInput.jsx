import { Button, FormControl, TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { instance } from "../axios/config";
import { CustomCheckBox } from "../component/molecules/user/CustomCheckBox";
import ComicLogTable from "../component/pages/ComicLogTable";
import { useComicInput } from "./provider/ComicInputProvider";
import { useMessage } from "./useMessage";

export const CreateComicInput = () => {
  const { inputData, setInputData, setComicList } = useComicInput();
  const { notifySuccess, notifyError } = useMessage();
  const [status, setStatus] = useState("");
  const [id, setId] = useState(null);
  const handleCheckBoxChange = (selectedStatus) => {
    setStatus(selectedStatus);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, event) => {
    event.preventDefault();
    try {
      const payload = {
        ...data,
        status: status,
      };
      const postResponse = await instance.post("/comiclogs", payload);
      setId(postResponse.data.id);

      const getResponse = await instance.get("/comiclogs");
      setComicList(getResponse.data);

      console.log(postResponse);
      setInputData({
        comicServiceName: "",
        comicTitle: "",
        volumes: "",
      });
      notifySuccess("登録成功");
    } catch (error) {
      notifyError("登録失敗");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <>
        <FormControl>
          <TextField
            {...register("comicServiceName", { required: true })}
            label="コミックサービス名"
            variant="outlined"
            sx={{ maxWidth: 360 }}
          />
          {errors.comicServiceName && (
            <span>コミックサービス名を入力してください</span>
          )}
        </FormControl>
        <FormControl>
          <TextField
            {...register("comicTitle", { required: true })}
            label="タイトル"
            variant="outlined"
            sx={{ maxWidth: 360 }}
          />
          {errors.comicTitle && <span>タイトルを入力してください</span>}
        </FormControl>
        <FormControl>
          <TextField
            {...register("volumes", { pattern: /^[0-9]*$/ })}
            label="巻数"
            variant="outlined"
            sx={{ maxWidth: 360 }}
          />
          {errors.volumes && <span>数字を入力してください</span>}
        </FormControl>
        <CustomCheckBox handleCheckBoxChange={handleCheckBoxChange} />
        <Button
          type="submit"
          size="medium"
          variant="outlined"
          sx={{ bgcolor: "text.secondary", color: "#fff", margin: "5px" }}
        >
          登録
        </Button>
      </>
      <ComicLogTable inputData={inputData} />
    </form>
  );
};
