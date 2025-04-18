import {useTranslation} from "react-i18next";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import * as React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import IconButton from "@mui/material/IconButton";
import '../App.css';

export default function ChangeLanguageButton() {


    const {t, i18n} = useTranslation("global")

    const [an, setAn] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAn(event.currentTarget);
    };

    const handleClose = () => {
        setAn(null);
    };

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        handleClose();
    }

    return (
        <div className="select-language-icon">
            <IconButton size="large"
                        aria-label="select language"
                        aria-controls="select-language"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit">
                <LanguageIcon/>

            </IconButton>

            // fixme after click, component keeps icon in circle
            <Menu
                id="select-language"
                anchorEl={an}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}

                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(an)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => changeLanguage("pl")}>pl</MenuItem>
                <MenuItem onClick={() => changeLanguage("en")}>en</MenuItem>
            </Menu>
        </div>

    )
}