import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import RangeCalendar from "./components/RangeCalendar";
import Shooters from "./components/Shooters";
import Competitions from "./components/Competitions";
import Visits from "./components/visits";
import * as React from "react";


export default function RangeRoutes() {

    return <Routes>
        <Route path="*" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/calendar" element={<RangeCalendar/>}/>
        <Route path="/shooters" element={<Shooters/>}/>
        <Route path="/competitions" element={<Competitions/>}/>
        <Route path="/visits" element={<Visits/>}/>
    </Routes>
}