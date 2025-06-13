import React from 'react'
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import './index.css'
import {Layout} from './layout/Layout';
import {Event} from './events/Event.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Reserve} from "./reservation/Reserve.tsx";
import {ShootersList} from "./shooters/ShootersList.tsx";
import {AllReservations} from "./reservation/AllReservations.tsx";
import {AddShooter} from "./shooters/AddShooter.tsx";
import {ShooterDetails} from "./shooters/ShooterDetails.tsx";
import {MyReservations} from "./reservation/MyReservations.tsx";
import {NewCompetition} from "./competitions/NewCompetition.tsx";
import {AllCompetitions} from "./competitions/AllCompetitions.tsx";
import {CompetitionDetails} from "./competitions/CompetitionDetails.tsx";

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

                <Route path='/reservation/new' element={<Layout/>}>
                    <Route index element={<Reserve/>}/>
                </Route>
                <Route path='/reservations' element={<Layout/>}>
                    <Route index element={<AllReservations/>}/>
                </Route>
                <Route path='/reservations/:userId' element={<Layout/>}>
                    <Route index element={<MyReservations/>}/>
                </Route>

                <Route path='/competitions/new' element={<Layout/>}>
                    <Route index element={<NewCompetition/>}/>
                </Route>
                <Route path='/competitions' element={<Layout/>}>
                    <Route index element={<AllCompetitions/>}/>
                </Route>
                <Route path='/competitions/:competitionId' element={<Layout/>}>
                    <Route index element={<CompetitionDetails/>}/>
                </Route>

                <Route path='/shooters' element={<Layout/>}>
                    <Route index element={<ShootersList/>}/>
                </Route>
                <Route path='/shooters/new' element={<Layout/>}>
                    <Route index element={<AddShooter/>}/>
                </Route>
                <Route path='/shooter/:id' element={<Layout/>}>
                    <Route index element={<ShooterDetails/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);