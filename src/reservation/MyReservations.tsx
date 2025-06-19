import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import {useEffect, useState} from "react";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";
import {useParams} from "react-router-dom";
import {reservations} from "../mocks/Reservations.tsx";
import {ReservationItem} from "./ReservationItem.tsx";
import {Reservation} from "../types/tracks/Reservation.tsx";

export const MyReservations = () => {

    const {userId} = useParams();

    const [myReservations, setMyReservations] = useState<Reservation[]>([]);
    useEffect(() => {
        // @ts-ignore
        setMyReservations(reservations.filter(r => r.userId === +userId));
    }, [])

    return (
        <Container fluid>
            RESERVATIONS LIST
            <Accordion defaultActiveKey="filtrowanie">
                <Accordion.Item eventKey="filtrowanie">
                    <Accordion.Body>
                        <Form.Label>Szukaj</Form.Label>
                        <Form.Control type="text"/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Reservation Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Licence</th>
                    <th>Track</th>
                    <th>Club</th>
                    <th>From</th>
                    <th>To</th>
                </tr>
                </thead>
                <tbody>
                {myReservations.map((item, index) => <ReservationItem key={index} reservation={item}/>)}
                </tbody>
            </Table>
        </Container>
    )
};
