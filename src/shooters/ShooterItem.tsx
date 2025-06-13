import {Shooter} from "../types/shooters/Shooter.tsx";
import {useNavigate} from "react-router-dom";

type ShooterProps = {
    shooter: Shooter
}
export const ShooterItem = (props: ShooterProps) => {
    const {shooter} = props; //z propsa pobieramy sam towar

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/shooter/${shooter.id}`);
    };

    return (<tr onClick={handleClick}>
        <td>{shooter.id}</td>
        <td>{shooter.firstName}</td>
        <td>{shooter.lastName}</td>
        <td>{shooter.age}</td>
        <td>{shooter.licence}</td>
        <td>{shooter.address}</td>
    </tr>)
}