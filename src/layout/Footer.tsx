import {Container, Grid, useMediaQuery, useTheme} from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import {useTranslation} from "react-i18next";

export default function Footer() {

    const theme = useTheme();
    const greaterThanMid = useMediaQuery(theme.breakpoints.up("md"));

    const {t} = useTranslation();

    return <Box
        sx={{
            width: "100%",
            height: "12rem",
            position: "fixed",
            bottom: "0",
            zIndex: greaterThanMid ? "99999999" : "unset",
            background: "#1976d2",
            color: "white",
        }}
    >
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid size={{xs: 6, md: 8}}>
                    <p>{t('footer.contact')}</p>
                    <p>Tulipanowa 54, Chrząszczzębożyce</p>
                    <p>83 7434 1223 0000 2323 4321</p>
                    <p>REGON: 2342343311</p>
                </Grid>
                <Grid size={{xs: 6, md: 4}}>
                    <p>{t('footer.carrier')}</p>
                    <p>{t('footer.serviceRegulation')}</p>
                    <p>{t('footer.rangeRegulation')}</p>
                </Grid>
            </Grid>
        </Container>
    </Box>
}