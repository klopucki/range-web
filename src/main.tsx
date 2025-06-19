import React from 'react'
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import './index.css'
import {Layout} from './layout/Layout';
import {EventPage} from './events/EventPage.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ReserveTrack} from "./reservation/ReserveTrack.tsx";
import {ShootersListComponent} from "./shooters/ShootersListComponent.tsx";
import {ReservationsList} from "./reservation/ReservationsList.tsx";
import {AddShooter} from "./shooters/AddShooter.tsx";
import {ShooterDetails} from "./shooters/ShooterDetails.tsx";
import {UpsertCompetition} from "./competitions/UpsertCompetition.tsx";
import {CompetitionsList} from "./competitions/CompetitionsList.tsx";
import {CompetitionDetails} from "./competitions/CompetitionDetails.tsx";
import './i18n'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<App/>}/>
                </Route>
                <Route path='/event/:id' element={<Layout/>}>
                    <Route index element={<EventPage/>}/>
                </Route>

                <Route path='/reservation/new' element={<Layout/>}>
                    <Route index element={<ReserveTrack/>}/>
                </Route>
                <Route path='/reservations' element={<Layout/>}>
                    <Route index element={<ReservationsList/>}/>
                </Route>

                <Route path='/competitions/new' element={<Layout/>}>
                    <Route index element={<UpsertCompetition/>}/>
                </Route>
                <Route path='/competitions' element={<Layout/>}>
                    <Route index element={<CompetitionsList/>}/>
                </Route>
                <Route path='/competitions/:competitionId' element={<Layout/>}>
                    <Route index element={<CompetitionDetails/>}/>
                </Route>
                <Route path='/competitions/:competitionId/upsert' element={<Layout/>}>
                    <Route index element={<UpsertCompetition/>}/>
                </Route>

                <Route path='/shooters' element={<Layout/>}>
                    <Route index element={<ShootersListComponent/>}/>
                </Route>
                <Route path='/shooters/new' element={<Layout/>}>
                    <Route index element={<AddShooter/>}/>
                </Route>
                <Route path='/shooters/:id/edit' element={<Layout/>}>
                    <Route index element={<ShooterDetails/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);