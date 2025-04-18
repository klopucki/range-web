import IconButton from "@mui/material/IconButton";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import '../App.css';
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function AccountIcon() {

    const navigate = useNavigate();
    const {t} = useTranslation();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return <div className="user-details-icon">

        // fixme after click, component keeps icon in circle
        <IconButton size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit">
            <AccountCircleSharpIcon style={{fontSize: "35px"}} />
        </IconButton>
        <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}

            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={() => {navigate('/profile'); handleClose();}}>{t('nav.profile')}</MenuItem>
            <MenuItem onClick={() => handleClose()}>{t('accountMenu.logout')}</MenuItem>
        </Menu>
    </div>
}