import {useEffect, useState} from "react";
import {CompetitionForm} from "./CompetitionForm.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {Competition} from "../types/competitions/Competition.tsx";
import {competitions} from "../mocks/Competitions.tsx";
import {shooters} from "../mocks/Shooters.tsx";

export const UpsertCompetition = () => {
    const {competitionId} = useParams();
    const navigate = useNavigate();

    const [selectedCompetition, setSelectedCompetition] = useState<Competition>();
    useEffect(() => {
        // @ts-ignore
        setSelectedCompetition(competitions.find(c => c.id === +competitionId));
    }, [])

    const handleFormSubmit = (data: Competition) => {
        if (data.id) {
            competitions.map((comp) => (comp.id === data.id ? data : comp));
            const index = competitions.findIndex(s => s.id === +data.id);
            if (index !== -1) {
                competitions[index] = data;
            }
        } else {
            const competitionWithMaxId = shooters.reduce((prev, current) => (prev && prev.id > current.id) ? prev : current);
            data.id = competitionWithMaxId.id + 1;
            competitions.push(data);
        }

        navigate("/competitions");
    };

    if (!selectedCompetition) {
        return <CompetitionForm onSubmit={handleFormSubmit}/>
    }

    return <CompetitionForm competition={selectedCompetition} onSubmit={handleFormSubmit}/>;
}