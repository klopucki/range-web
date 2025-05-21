import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import {useEffect, useState} from "react";
import {Shooter} from "../types/shooters/Shooter.tsx";
import {shooters} from "../mocks/Shooters.tsx";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";
import {ShooterItem} from "../shooters/ShooterItem.tsx";

export const AllReservations = () => {
    const [shootersList, setShootersList] = useState<Shooter[]>([]);
    useEffect(() => {
        setShootersList(shooters);
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
                    <th>Kod</th>
                    <th>Nazwa</th>
                    <th>Kategoria</th>
                    <th>PKWIU</th>
                    <th>Cena</th>
                </tr>
                </thead>
                <tbody>
                {shootersList.map((item, index) => <ShooterItem key={index} shooter={item}/>)}
                </tbody>
            </Table>
        </Container>
    )
};
