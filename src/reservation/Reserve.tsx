import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {shooters} from "../mocks/Shooters";
import {CURRENT_USER_ID} from "../App.tsx";
import {Shooter} from "../types/shooters/Shooter.tsx";
import {Reservation} from "../types/tracks/Reservation.tsx";
import {reservations} from "../mocks/Reservations.tsx";
import {useNavigate} from "react-router-dom";
import Moment from 'moment';
import MomentInput from 'moment';

export const Reserve = () => {
    const navigate = useNavigate();

// @ts-ignore
    const onFormSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries());
        console.log(formDataObj);

        const trackId = +formDataObj['trackId'];
        // @ts-ignore
        const reservationFrom = Moment(MomentInput(formDataObj['dateFrom']), false).format('MM-DD-yyyy hh:ss');
        // @ts-ignore
        const reservationto = Moment(MomentInput(formDataObj['dateTo']), false).format('MM-DD-yyyy hh:ss');

        const shooter: Shooter | undefined = shooters.find(s => s.id === CURRENT_USER_ID);
        if (shooter) {
            reservations.push({
                id: 1,
                userId: shooter.id,
                track: trackId,
                sportClub: shooter.sportClub,
                licence: shooter.licence,
                firstName: shooter.firstName,
                lastName: shooter.lastName,
                from: reservationFrom,
                to: reservationto
            } as Reservation);
        }
        navigate(`/reservations/${shooter?.id}`);
    }

    return (
        <Container fluid>
            <Form onSubmit={onFormSubmit}>
                <Row className="mt-3">
                    <Row className="mb-3">
                        <Form.Check>
                            <Form.Check
                                type="checkbox"
                                name="ownGun"
                                label="Strzelam z własnej broni"
                            />
                        </Form.Check>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group>
                            <Form.Label>Data i godzina rezerwacji (Start)</Form.Label>
                            <Form.Control type="datetime-local" name="dateFrom"/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group>
                            <Form.Label>Data i godzina rezerwacji (Koniec)</Form.Label>
                            <Form.Control type="datetime-local" name="dateTo"/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group>
                            <Form.Label>Potrzebuję osoby asystującej</Form.Label>
                            <Form.Select name="withAssistance">
                                <option>Wybierz</option>
                                <option value="1">Tak</option>
                                <option value="2">Nie</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group>
                            <Form.Label>Tor</Form.Label>
                            <Form.Select name="trackId">
                                <option>Wybierz</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4 (Long Range)</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                </Row>
                <Row className="mt-4">
                    <Button variant="primary" className="me-2" type="submit">Rezerwuj</Button>
                </Row>
            </Form>
        </Container>
    );
};
