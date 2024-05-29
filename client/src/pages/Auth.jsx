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

const Auth = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  /* const { login } = usePocket();

  const { mutate, isLoading, isError } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      setIsLoggedIn(true);
    },
    onError: () => {
      reset();
    },
  }); */

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);

  /* const onSubmit = async (data) => {
    mutate({ email: data.email, password: data.password });
  }; */

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  console.log(isError);

  const onSubmit = (data) => {
    if(data.email === "admin" && data.password === "admin") {
      setIsLoggedIn(true);
    } else {
      setIsError(true);
      reset();
    }
  }

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
        {isError && <p style={{ color: "red" }}>Invalid email or password</p>}
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
          <FormControlLabel
            control={<Checkbox name="remember" color="primary" />}
            label="Lembrar do usuário"
            {...register("remember")}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            /* disabled={isLoading} */
            sx={{ mt: 3, mb: 2 }}
          >
            {/* {isLoading ? "Loading" : "Login"} */}
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Auth;
