import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { usePocket } from "contexts/PocketContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { listPatients } from "api/patients";

const Auth = () => {
  const { register, handleSubmit, reset } = useForm();
  const { login } = usePocket();
  const navigate = useNavigate();

  const { mutate, isLoading, isError } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      setIsLoggedIn(true);
    },
    onError: () => {
      reset();
    },
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSubmit = async (data) => {
    mutate({ email: data.email, password: data.password });
    console.log(await listPatients());
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isError && <p style={{ color: "red" }}>Email ou senha inválido</p>}
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Usuário"
            name="email"
            autoComplete="email"
            autoFocus
            {...register("email", {
              required: "Email is required",
            })}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            {...register("password", {
              required: "Password is required",
            })}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isLoading}
            sx={{ mt: 3, mb: 2 }}
          >
            {isLoading ? "Loading" : "Login"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Auth;
