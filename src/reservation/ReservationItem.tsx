import {Reservation} from "../types/tracks/Reservation.tsx";

type ReservationProps = {
    reservation: Reservation
}
export const ReservationItem = (props: ReservationProps) => {
    const {reservation} = props;

    return (<tr>
        <td>{reservation.id}</td>
        <td>{reservation.firstName}</td>
        <td>{reservation.lastName}</td>
        <td>{reservation.licence}</td>
        <td>{reservation.track}</td>
        <td>{reservation.sportClub}</td>
        <td>{reservation.from}</td>
        <td>{reservation.to}</td>
    </tr>)
}