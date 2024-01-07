import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { CreateComicInput } from "../../hooks/CreateComicInput";
import HeaderLayout from "../atoms/HeaderLayout";

export const LogPage = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
    >
      <div style={{ width: "50%" }}>
        <Link to="/">
          <HeaderLayout />
        </Link>
        <Typography variant="h6" sx={{ paddingBottom: "10px" }}>
          お試し登録は3つまでです。
        </Typography>
        <CreateComicInput />
      </div>
    </div>
  );
};
