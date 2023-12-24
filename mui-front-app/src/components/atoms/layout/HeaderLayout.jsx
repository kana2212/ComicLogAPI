import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

export const HeaderLayout = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#66330e" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            どこまでよんだ？
          </Typography>
          <div>{children}</div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderLayout;
