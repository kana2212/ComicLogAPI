import axios from "axios";

export const CreateComic = async (comicData) => {
  try {
    const response = await axios.post("/comiclogs", comicData);
    console.log("登録成功:", response.data);
  } catch (error) {
    console.error("エラー:", error);
  }
};
