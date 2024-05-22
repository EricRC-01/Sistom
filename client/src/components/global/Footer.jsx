import { Box, Container, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "primary.main",
          position: "absolute",
          bottom: 0,
        }}
      >
        <Container>
          <Grid container direction="column" alignItems="center" py="1rem">
            <Grid item xs={12}>
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  ml: 1,
                  display: "flex",
                  fontFamily: "Varela Round",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "white ",
                  textDecoration: "none",
                }}
              >
                Sistom
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="white" variant="subtitle2">
                USP São Carlos (ICMC) em parceria com SUS Piauí - ©{`${new Date().getFullYear()}`} Sistom
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
