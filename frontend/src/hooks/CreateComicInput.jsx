import { Button, FormControl, TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { instance } from "../axios/config";
import { CustomCheckBox } from "../component/molecules/user/CustomCheckBox";
import ComicLogTable from "../component/pages/ComicLogTable";
import { useComicInput } from "./provider/ComicInputProvider";
import { useMessage } from "./useMessage";

export const CreateComicInput = () => {
  const { inputData, setComicList } = useComicInput();
  const { notifySuccess, notifyError, MessageSnackbar } = useMessage();
  const [status, setStatus] = useState("");
  const handleCheckBoxChange = (selectedStatus) => {
    setStatus(selectedStatus);
  };
  const {
    register,
    handleSubmit,
    reset,
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

      const getResponse = await instance.get("/comiclogs");
      setComicList(getResponse.data);

      console.log(postResponse);
      reset();
      notifySuccess("登録成功");
    } catch (error) {
      notifyError("登録失敗");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            {...register("volumes", {
              required: "入力必須",
              pattern: {
                value: /^[0-9]+$/,
                message: "巻数は数字のみ入力してください",
              },
            })}
            label="巻数"
            type="number"
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
      </form>
      <ComicLogTable inputData={inputData} />
      <MessageSnackbar />
    </>
  );
};
