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

const Header = () => {
  const { logout, user } = usePocket();

  const settings = ["Perfil", "Logout"];

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "primary.main" }}>
      <Container>
        <Toolbar disableGutters>
          <Link to="/">
            <Box component="img" alt="Logo" src={Logo} height="3rem" />
          </Link>

          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              ml: 1,
              display: "flex",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SISTOM
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end",
              mr: 1,
            }}
          >
            <Button
              component={Link}
              to={"/Relatorio"}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Relatório
            </Button>
          </Box>

          <Box>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Amogus da Silva" src="/src/assets/paciente7.jpeg" />
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
