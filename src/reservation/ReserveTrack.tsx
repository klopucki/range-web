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
import Col from "react-bootstrap/Col";
import {useTranslation} from "react-i18next";

export const ReserveTrack = () => {
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
        navigate(`/reservations`);
    }

    const {t} = useTranslation();

    return (
        <Container className="d-flex justify-content-center align-items-center">
            <div style={{width: '100%', maxWidth: '1000px'}}>
                <Form onSubmit={onFormSubmit}>
                    <Row className="mt-3 justify-content-center">

                        <Col xs={12} md={6} className="mb-3">
                            <Form.Group>
                                <Form.Label>{t('reservations.reservation.start')}</Form.Label>
                                <Form.Control type="datetime-local" name="dateFrom"/>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6} className="mb-3">
                            <Form.Group>
                                <Form.Label>{t('reservations.reservation.end')}</Form.Label>
                                <Form.Control type="datetime-local" name="dateTo"/>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6} className="mb-3">
                            <Form.Group>
                                <Form.Label>{t('reservations.reservation.withSupport')}</Form.Label>
                                <Form.Select name="withAssistance">
                                    <option>{t('reservations.reservation.choose')}</option>
                                    <option value="1">{t('reservations.reservation.yes')}</option>
                                    <option value="2">{t('reservations.reservation.no')}</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6} className="mb-3">
                            <Form.Group>
                                <Form.Label>{t('reservations.reservation.track')}</Form.Label>
                                <Form.Select name="trackId">
                                    <option>{t('reservations.reservation.choose')}</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4 (Long Range)</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6} className="mb-3">
                            <Form.Check>
                                <Form.Check
                                    type="checkbox"
                                    name="ownGun"
                                    label={t('reservations.reservation.ownGun')}
                                />
                            </Form.Check>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col>
                            <Button variant="primary" type="submit">{t('reservations.reservation.reserve')}</Button>
                        </Col>
                    </Row>

                </Form>
            </div>
        </Container>
    );
};
