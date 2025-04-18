import * as React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import './App.css';
import Nav from "./layout/Nav";
import RangeRoutes from "./routes";
import Header from "./layout/Header";


export default function App() {

    const [isNavOpen, setNavOpen] = React.useState(true);

    const toggleNav = () => {
        setNavOpen(!isNavOpen);
    };

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>

            <Header toggleNav={toggleNav}/>
            <Nav open={isNavOpen}></Nav>

            <RangeRoutes/>
        </Box>
    )
}