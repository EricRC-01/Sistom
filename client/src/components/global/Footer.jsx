import React, { FC, ReactElement } from "react";
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
                            display: 'flex',
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            }}
                        >
                            SISTOM
                        </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="textSecondary" variant="subtitle2">
                USP São Carlos - ICMC - {`${new Date().getFullYear()}`}
              </Typography>
              {/* <Typography
                color="textSecondary"
                variant="subtitle2"
                textAlign={"center"}
              >
                Site desenvolvido para Centro de Ciências da Saúde (CSS), por
                estudantes da Universidade de São Paulo (USP) para uso exclusivo
                de profissionais da saúde do Sistema Único de Saúde (SUS) do
                Piauí
              </Typography> */}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
