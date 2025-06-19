import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, Outlet} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import {LanguageSwitcher} from "./LanguageSwitcher.tsx";
import {useTranslation} from "react-i18next";
import {shooters} from "../mocks/Shooters.tsx";
import {CURRENT_USER_ID} from "../App.tsx";
import {Shooter} from "../types/shooters/Shooter.tsx";

export function Layout() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem("darkMode");
        if (savedMode) {
            setDarkMode(savedMode === "true");
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("darkMode", String(darkMode));
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode(prev => !prev);

    const themeClass = darkMode ? "bg-dark text-light" : "bg-light text-dark";
    const navVariant = darkMode ? "dark" : "light";

    const {t} = useTranslation();

    const [shooter, setShooter] = useState<Shooter | undefined>();
    useEffect(() => {
        const s = shooters.find(s => s.id === CURRENT_USER_ID);
        setShooter(s);
    }, []);

    const logout = () => {
        console.log('User Logged Out...')
    };

    return (
        <div className={`app min-vh-100 ${themeClass}`}>
            <Navbar expand="lg" bg={navVariant} variant={navVariant} className="shadow-sm">
                <Container fluid>
                    <Navbar.Brand>
                        <Link to="/" className="d-block">
                            <Image src="/image/logo.png" className="logo" alt="Logo" height={30}/>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{maxHeight: '100px'}}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/">{t('navbar.home')}</Nav.Link>
                            <Nav.Link as={Link} to="/reservations">{t('navbar.trackReservation')}</Nav.Link>
                            <Nav.Link as={Link} to="/competitions">{t('navbar.competitions')}</Nav.Link>
                            <Nav.Link as={Link} to="/shooters">{t('navbar.shooters')}</Nav.Link>
                        </Nav>

                        <Form className="d-flex align-items-center me-5">
                            <Form.Check
                                type="switch"
                                id="dark-mode-switch"
                                label="Dark Mode"
                                checked={darkMode}
                                onChange={toggleDarkMode}
                                className={darkMode ? "text-light" : "text-dark"}
                            />
                        </Form>

                        <div className="d-flex align-items-center me-5">
                            <LanguageSwitcher/>
                        </div>

                        {/*<Button variant={darkMode ? "outline-light" : "outline-success"}
                                className="me-2">{t('navbar.register')}</Button>
                        <Button variant={darkMode ? "outline-light" : "outline-success"}>{t('navbar.login')}</Button>*/}

                        {shooter ? (
                            <>
                                <span className={`me-2 ${darkMode ? 'text-white' : 'text-dark'}`}>
                                  {shooter.firstName} {shooter.lastName}
                                </span>
                                <Button
                                    variant={darkMode ? "outline-light" : "success"}
                                    onClick={logout}
                                >
                                    {t('navbar.logout')}
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button
                                    variant={darkMode ? "outline-light" : "outline-success"}
                                    className="me-2"
                                >
                                    {t('navbar.register')}
                                </Button>
                                <Button variant={darkMode ? "outline-light" : "outline-success"}>
                                    {t('navbar.login')}
                                </Button>
                            </>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className={`px-3 py-4 ${themeClass}`}>
                <Container fluid>
                    <Outlet/>
                </Container>
            </div>
        </div>
    );
}