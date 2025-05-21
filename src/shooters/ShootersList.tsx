import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import {useEffect, useState} from "react";
import {shooters} from "../mocks/Shooters.tsx";
import {Shooter} from "../types/shooters/Shooter.tsx";
import {ShooterItem} from "./ShooterItem.tsx";

export const ShootersList = () => {
    const [shootersList, setShootersList] = useState<Shooter[]>([]);
    useEffect(() => {
        setShootersList(shooters);
    }, [])

    return (
        <Container fluid>
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
                    <th>Id</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Age</th>
                    <th>Licence Number</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                {shootersList.map((item, index) => <ShooterItem key={index} shooter={item}/>)}
                </tbody>
            </Table>
        </Container>
    )
}