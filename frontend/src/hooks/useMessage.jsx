import { toast } from "react-hot-toast";

export const useMessage = () => {
  const notifySuccess = (message) =>
    toast.success(message, {
      style: {
        display: "flex",
        justifyContent: "center",
        margin: "4px 10px",
        color: "inherit",
        flex: "1 1 auto",
        whiteSpace: "pre-line",
      },
    });
  const notifyError = (message) =>
    toast.error(message, {
      style: {
        display: "flex",
        justifyContent: "center",
        margin: "4px 10px",
        color: "inherit",
        flex: "1 1 auto",
        whiteSpace: "pre-line",
      },
    });

  return { notifySuccess, notifyError };
};
