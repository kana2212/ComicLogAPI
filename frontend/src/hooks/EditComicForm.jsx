import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const EditComicForm = ({ comic, onSubmit }) => {
  const [formData, setFormData] = useState({
    ...comic,
    volumes: comic.volumes || 0,
  });

  const handleChange = (e) => {
    let value = e.target.value;
    if (e.target.name === "volumes") {
      value = parseInt(value, 10);
      if (isNaN(value)) {
        value = 0;
      }
    }
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleFormSubmit = (data) => {
    onSubmit(formData);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <FormControl>
        <TextField
          {...register("comicServiceName", { required: "入力必須" })}
          type="text"
          name="comicServiceName"
          value={formData.comicServiceName}
          onChange={handleChange}
          error={Boolean(errors.comicServiceName)}
          helperText={
            errors.comicServiceName
              ? "コミックサービス名を入力してください"
              : ""
          }
          sx={{ width: "100%", margin: "8px 0" }}
        />
      </FormControl>
      <FormControl>
        <TextField
          {...register("comicTitle", { required: "入力必須" })}
          type="text"
          name="comicTitle"
          value={formData.comicTitle}
          onChange={handleChange}
          error={Boolean(errors.comicTitle)}
          helperText={errors.comicTitle ? "タイトル名を入力してください" : ""}
          sx={{ width: "100%", margin: "8px 0" }}
        />
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
          type="number"
          name="volumes"
          value={formData.volumes}
          onChange={handleChange}
          error={Boolean(errors.volumes)}
          helperText={errors.volumes ? "数字を入力してください" : ""}
          sx={{ width: "100%", margin: "8px 0" }}
        />
      </FormControl>
      <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="status-label">ステータス</InputLabel>
        <Select
          {...register("status", { required: "ステータスを選択してください" })}
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <MenuItem value="続">続</MenuItem>
          <MenuItem value="完結">完結</MenuItem>
        </Select>
        {errors.status && <span>{errors.status.message}</span>}
      </FormControl>
      <Button type="submit" variant="contained">
        保存
      </Button>
    </form>
  );
};

export default EditComicForm;
