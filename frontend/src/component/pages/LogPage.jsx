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
          読書記録をつける
        </Typography>
        <CreateComicInput />
      </div>
    </div>
  );
};
