import {Container, Grid, useMediaQuery, useTheme} from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";

export default function Footer() {

    const theme = useTheme();
    const greaterThanMid = useMediaQuery(theme.breakpoints.up("md"));

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
                <Grid size={{ xs: 6, md: 8 }}>
                    <p>Kontak</p>
                    <p>Miejsce na adres</p>
                    <p>Miejsce na nr konta</p>
                    <p>Miejsce na nip i rego</p>
                </Grid>
                <Grid size={{ xs: 6, md: 4 }}>
                    <p>Oferty pracy</p>
                    <p>Regulamin serwisu</p>
                    <p>Regulamin strzelnicy</p>
                </Grid>
            </Grid>
        </Container>
    </Box>
}