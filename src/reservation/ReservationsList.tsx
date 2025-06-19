import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import {useEffect, useState} from "react";
import Accordion from "react-bootstrap/Accordion";
import {Reservation} from "../types/tracks/Reservation.tsx";
import {reservations} from "../mocks/Reservations.tsx";
import {Col, Row} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {useTranslation} from "react-i18next";

export const ReservationsList = () => {

    const {t} = useTranslation();

    const [myReservations, setMyReservations] = useState<Reservation[]>([]);
    const [search, setSearch] = useState("");
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");

    useEffect(() => {
        setMyReservations(reservations);
    }, []);

    const matchesSearch = (r: Reservation) =>
        `${r.firstName} ${r.lastName} ${r.track} ${r.sportClub}`
            .toLowerCase()
            .includes(search.toLowerCase());

    const matchesDateRange = (r: Reservation) => {
        const resDate = new Date(r.from);
        const fromOk = !dateFrom || resDate >= new Date(dateFrom);
        const toOk = !dateTo || resDate <= new Date(dateTo);
        return fromOk && toOk;
    };

    const filtered = myReservations.filter(r => matchesSearch(r) && matchesDateRange(r));

    const handleRemove = (idToRemove: number) => {
        if (window.confirm(t('reservations.deleteConfirmation'))) {
            setMyReservations(prev => prev.filter(r => r.id !== idToRemove));
        }
    };

    return (
        <Container fluid className="mt-4">
            <h4 className="mb-4">📋 {t('reservations.listReservations')}</h4>

            <Accordion defaultActiveKey="filter" className="mb-4">
                <Accordion.Item eventKey="filter">
                    <Accordion.Header>🔍 {t('reservations.filters.filters')}</Accordion.Header>
                    <Accordion.Body>
                        <Row className="g-3">
                            <Col md={6} lg={4}>
                                <Form.Label>{t('reservations.filters.searchBy')}</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="np. Jan Nowak, klub, tor..."
                                />
                            </Col>
                            <Col md={3} lg={2}>
                                <Form.Label>{t('reservations.filters.from')}</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={dateFrom}
                                    onChange={(e) => setDateFrom(e.target.value)}
                                />
                            </Col>
                            <Col md={3} lg={2}>
                                <Form.Label>{t('reservations.filters.to')}</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={dateTo}
                                    onChange={(e) => setDateTo(e.target.value)}
                                />
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Row className="mb-3">
                <Col className="text-end">
                    <Link to={`/reservation/new`}>
                        <Button variant="primary">+ {t('reservations.reserveTrack')}</Button>
                    </Link>
                </Col>
            </Row>

            <Table striped bordered hover responsive className="shadow-sm">
                <thead className="table-light">
                <tr>
                    {/*<th>ID</th>*/}
                    <th>{t('reservations.list.firstName')}</th>
                    <th>{t('reservations.list.lastName')}</th>
                    <th>{t('reservations.list.licence')}</th>
                    <th>{t('reservations.list.track')}</th>
                    <th>{t('reservations.list.club')}</th>
                    <th>{t('reservations.list.from')}</th>
                    <th>{t('reservations.list.to')}</th>
                    <th>{t('reservations.list.action')}</th>
                </tr>
                </thead>
                <tbody>
                {filtered.length === 0 ? (
                    <tr>
                        <td colSpan={8} className="text-center text-muted">
                            {t('reservations.list.noRecords')}
                        </td>
                    </tr>
                ) : (
                    filtered.map((item, index) => (
                        <tr key={index}>
                            {/*<td>{item.id}</td>*/}
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.licence}</td>
                            <td>{item.track}</td>
                            <td>{item.sportClub}</td>
                            <td>{item.from}</td>
                            <td>{item.to}</td>
                            <td>
                                <Button
                                    variant="outline-danger"
                                    size="sm"
                                    onClick={() => handleRemove(item.id)}
                                >
                                    {t('reservations.list.delete')}
                                </Button>
                            </td>
                        </tr>
                    ))
                )}
                </tbody>
            </Table>
        </Container>
    );
};
