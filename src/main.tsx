import React from 'react'
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import './index.css'
import {Layout} from './layout/Layout';
import {Event} from './events/Event.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {MakeReservation} from "./reservation/MakeReservation.tsx";
import {ShootersList} from "./shooters/ShootersList.tsx";
import {AllReservations} from "./reservation/AllReservations.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<App/>}/>
                </Route>
                <Route path='/event/:id' element={<Layout/>}>
                    <Route index element={<Event/>}/>
                </Route>
                <Route path='/reservation/add' element={<Layout/>}>
                    <Route index element={<MakeReservation/>}/>
                </Route>
                <Route path='/reservations' element={<Layout/>}>
                    <Route index element={<AllReservations/>}/>
                </Route>
                <Route path='/shooters' element={<Layout/>}>
                    <Route index element={<ShootersList/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);