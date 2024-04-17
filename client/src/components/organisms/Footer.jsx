import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <>
        <Box
        sx={{
            width: "100%",
            backgroundColor: "primary.main",
            position: 'absolute',
            bottom: 0,
        }}
        >
            <Container>
                <Grid container direction="column" alignItems="center">
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
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </>

  );
};

export default Footer;