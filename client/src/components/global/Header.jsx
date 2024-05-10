import {
  Typography,
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
  Container,
  Box,
  IconButton,
  Button,
  Avatar,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@mui/material";
import Logo from "../../../global/logo.png";
import { usePocket } from "contexts/PocketContext";
import { useQuery } from "@tanstack/react-query";

import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";


const Header = () => {
  const { logout, user, pb, getById } = usePocket();

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //i want to make the below function only execute when the user is logged in
  //i want to get the user's avatar from the database

  const queryClient = useQueryClient();

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      getById({
        table: "users",
        id: pb.authStore.model.id,
      }),
  });

  useEffect(() => {
    return () => {
      // Reset the data in the query cache when the component unmounts
      queryClient.removeQueries(["users", pb?.authStore?.model?.id]);
    };
  }, [queryClient, pb?.authStore?.model?.id]);


  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "primary.main",
        paddingTop: "0.8rem",
        paddingBottom: "0.5rem",
      }}
    >
      <Container>
        <Toolbar
          disableGutters
          sx={{
            justifyContent: pb.authStore.isValid ? "flex-start" : "center",
          }}
        >
          <Link to="/">
            <Box component="img" alt="Logo" src={Logo} height="4rem" />
          </Link>

          <Typography
            variant="h4"
            noWrap
            component="a"
            sx={{
              ml: 1,
              fontFamily: "Varela Round",
              fontWeight: 700,
            }}
          >
            Sistom
          </Typography>
          {pb.authStore.isValid ? (
            <>
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "flex-end",
                  mr: 1,
                }}
              >
                <Typography align="center" variant="h6" color="initial" sx={{ mr: 1, color: "white" }}>{data?.name}</Typography>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    sx={{ backgroundColor: "black" }}
                    alt="Foto do usuário"
                    src={isLoading || isError ? '#' : `http://127.0.0.1:8090/api/files/_pb_users_auth_/${pb.authStore.model.id}/${data?.avatar}`}
                  />
                </IconButton>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem
                    onClick={() => {
                      logout();
                      handleCloseUserMenu();
                    }}
                    key={"Logout"}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </Box>
            </>
          ) : (
            <></>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
