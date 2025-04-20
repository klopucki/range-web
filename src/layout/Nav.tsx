import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import * as React from "react";
import {CSSObject, styled, Theme} from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListItemText from "@mui/material/ListItemText";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import Box from "@mui/material/Box";

const drawerWidth = 240;

export default function Nav({open}) {

    const navigate = useNavigate();
    const {t} = useTranslation();

    // fixme smooth transition doesn't work
    const openedMixin = (theme: Theme): CSSObject => ({
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
    });

    const closedMixin = (theme: Theme): CSSObject => ({
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.down('md')]: {
            display: `none`
        },
    });

    const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
        ({theme}) => ({
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            variants: [
                {
                    props: ({open}) => open,
                    style: {
                        ...openedMixin(theme),
                        '& .MuiDrawer-paper': openedMixin(theme),
                    },
                },
                {
                    props: ({open}) => !open,
                    style: {
                        ...closedMixin(theme),
                        '& .MuiDrawer-paper': closedMixin(theme),
                    },
                },
            ],
        }),
    );

    // todo replace index with icon
    function getListItemButton(name: string, path, index) {
        return <ListItem key={name} disablePadding sx={{display: 'block'}}>
            <ListItemButton onClick={() => navigate(path)} sx={[
                {minHeight: 48, px: 2.5},
                open ? {justifyContent: 'initial'} : {justifyContent: 'center'}
            ]}
            >
                <ListItemIcon
                    sx={[{minWidth: 0, justifyContent: 'center'}, open ? {mr: 3} : {mr: 'auto'}]}>
                    {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                </ListItemIcon>
                <ListItemText
                    primary={name}
                    sx={[open ? {opacity: 1} : {opacity: 0}]}
                >
                </ListItemText>
            </ListItemButton>
        </ListItem>;
    }

    return <Drawer variant="permanent" open={open}>
        <Box sx={{width: 250}} role="presentation">
            <div style={{height: "50px"}}></div>
            <Divider/>

            <List>
                {getListItemButton(t('nav.home'), '*', 1)}
                {getListItemButton(t('nav.profile'), '/profile', 2)}
                {getListItemButton(t('nav.calendar'), '/calendar', 3)}
                {getListItemButton(t('nav.competitions'), '/competitions', 4)}
                {getListItemButton(t('nav.shooters'), '/shooters', 5)}
                {getListItemButton(t('nav.visits'), '/visits', 6)}
            </List>

            <Divider/>
        </Box>
    </Drawer>
}