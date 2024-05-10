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
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white ",
                  textDecoration: "none",
                }}
              >
                SISTOM
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="white" variant="subtitle2">
                USP São Carlos - ICMC - {`${new Date().getFullYear()}`}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
