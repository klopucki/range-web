import * as React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import './App.css';
import Nav from "./layout/Nav";
import RangeRoutes from "./routes";
import Header from "./layout/Header";
import {useMediaQuery, useTheme} from "@mui/material";
import Footer from "./layout/Footer";


export default function App() {

    const theme = useTheme();
    const greaterThanMid = useMediaQuery(theme.breakpoints.up("md"));

    const [isNavOpen, setNavOpen] = React.useState(greaterThanMid);

    const toggleNav = () => {
        setNavOpen(!isNavOpen);
    };

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>

            <Header toggleNav={toggleNav}/>
            <Footer/>
            <Nav open={isNavOpen}></Nav>

            <RangeRoutes/>
        </Box>
    )
}