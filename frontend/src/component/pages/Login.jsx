import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";

export const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("メールアドレス"),
      password: data.get("パスワード"),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "text.main",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "warning.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          ログイン
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ color: "text.secondary", mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="メールアドレス"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="パスワード"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ bgcolor: "warning.main", mt: 3, mb: 2 }}
          >
            ログイン
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link href="#" variant="body2" sx={{ color: "text.secondary" }}>
                {"新規登録"}
              </Link>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item style={{ marginTop: "20px" }}>
              <Link href="/" variant="body2" sx={{ color: "text.secondary" }}>
                {"TOPへ戻る"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
export default Login;
