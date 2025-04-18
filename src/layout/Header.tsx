import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import AccountIcon from "./AccountIcon";
import * as React from "react";
import {styled} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import ChangeLanguageButton from "./ChangeLanguage";

// todo change to header
export default function Header({toggleNav}) {

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({theme}) => ({
        zIndex: theme.zIndex.drawer + 1,
    }));

    return <AppBar position="fixed">
        <Toolbar variant={"dense"}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleNav}
                edge="start"
                sx={[
                    {
                        marginRight: 5,
                    }
                ]}
            >
                <MenuIcon/>
            </IconButton>
            <Typography variant="h6" noWrap component="div">
                RANGE
            </Typography>

            <ChangeLanguageButton></ChangeLanguageButton>
            <AccountIcon></AccountIcon>
        </Toolbar>
    </AppBar>
}