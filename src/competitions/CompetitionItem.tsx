import {useNavigate} from "react-router-dom";
import {Competition} from "../types/competitions/Competition.tsx";
import Card from "react-bootstrap/Card";

type CompetitionProps = {
    competition: Competition
}
export const CompetitionItem = (props: CompetitionProps) => {
    const {competition} = props;

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/competitions/${competition.id}`);
    };

    return (<tr onClick={handleClick}>
        <td><Card.Img variant="top" src={competition.img}/></td>
        <td>{competition.id}</td>
        <td>{competition.title}</td>
        <td>{competition.date}</td>
        <td>{competition.registrationDate}</td>
        <td>{competition.extendsLicence ? 'YES' : 'NO'}</td>
    </tr>)
}