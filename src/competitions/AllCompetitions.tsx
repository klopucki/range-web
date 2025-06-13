import {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import {competitions} from "../mocks/Competitions.tsx";
import {Competition} from "../types/competitions/Competition.tsx";
import {CompetitionItem} from "./CompetitionItem.tsx";

export const AllCompetitions = () => {
    const [clubCompetitions, setClubCompetitions] = useState<Competition[]>([]);
    useEffect(() => {
        setClubCompetitions(competitions);
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
                    <th></th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Event Day</th>
                    <th>Register To</th>
                    <th>Extends Licence</th>
                </tr>
                </thead>
                <tbody>
                {clubCompetitions.map((item, index) => <CompetitionItem key={index} competition={item}/>)}
                </tbody>
            </Table>
        </Container>
    )
}