import AccountCircle from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import HeaderLayout from "./HeaderLayout";

export const Header = () => {
  return (
    <HeaderLayout>
      <div style={{ display: "flex", alignItems: "center" }}>
        <AccountCircle />
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
      </div>
    </HeaderLayout>
  );
};
