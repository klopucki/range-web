import {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import {competitions, registeredShooters} from "../mocks/Competitions.tsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Badge, Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {CURRENT_USER_ID} from "../App.tsx";
import {useTranslation} from "react-i18next";

export const CompetitionsList = () => {
    const {t} = useTranslation();
    const [search, setSearch] = useState("");
    const [registeredEvents, setRegisteredEvents] = useState<{ [key: string]: boolean }>({});

    const filtered = competitions.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    const handleClick = (eventId: number) => {
        registeredShooters.push({shooterId: CURRENT_USER_ID, eventId: eventId})
        setRegisteredEvents(Object.fromEntries(registeredShooters.map(rs => [rs.eventId, true])));
    };

    useEffect(() => {
        setRegisteredEvents(Object.fromEntries(registeredShooters.map(rs => [rs.eventId, true])));
    }, []);

    return (
        <Container fluid className="mt-3">
            <Accordion defaultActiveKey="filtrowanie" className="mb-4">
                <Accordion.Item eventKey="filtrowanie">
                    <Accordion.Header>🔍 {t('competitions.list.filter')}</Accordion.Header>
                    <Accordion.Body>
                        <Form.Control
                            type="text"
                            placeholder={t('competitions.list.placeholder.filter')}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Row className="mb-3">
                <Col className="text-end">
                    <Link to={`/competitions/-1/upsert`}>
                        <Button variant="primary">+ {t('competitions.list.create')}</Button>
                    </Link>
                </Col>
            </Row>

            <Row className="g-4">
                {filtered.length === 0 && (
                    <Col>
                        <p className="text-muted">{t('competitions.list.noResult')}</p>
                    </Col>
                )}
                {filtered.map((item, index) => (
                    <Col xs={12} md={6} lg={4} xl={3} key={index}>
                        <Card className="h-100 shadow-sm border-0">
                            {item.img && (
                                <Card.Img
                                    variant="top"
                                    src={item.img}
                                    alt="competition"
                                    style={{
                                        objectFit: "cover",
                                        height: "180px",
                                        borderTopLeftRadius: "0.5rem",
                                        borderTopRightRadius: "0.5rem",
                                    }}
                                />
                            )}
                            <Card.Body>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <Card.Title className="mb-0">{item.title}</Card.Title>
                                    {item.isClosed ? (
                                        <Badge bg="secondary">{t('competitions.list.closed')}</Badge>
                                    ) : (
                                        <Badge bg="success">{t('competitions.list.new')}</Badge>
                                    )}
                                </div>

                                <Card.Subtitle className="mb-2 text-muted">
                                    #{item.id}
                                </Card.Subtitle>

                                <div className="mb-1">
                                    <strong>{t('competitions.list.day')}:</strong> {item.date}
                                </div>
                                <div className="mb-1">
                                    <strong>{t('competitions.list.registerTo')}:</strong> {item.registrationDate}
                                </div>
                                <div className="mb-2">
                                    <strong>{t('competitions.list.extendLicence')}:</strong> {item.extendsLicence ? t('competitions.list.yes') : t('competitions.list.no')}
                                </div>

                                <div className="d-flex gap-2 mt-3">
                                    <Link to={`/competitions/${item.id}`}>
                                        <Button size="sm" variant="primary">{t('competitions.list.details')}</Button>
                                    </Link>
                                    <Link to={`/competitions/${item.id}/upsert`}>
                                        <Button size="sm" variant="secondary">{t('competitions.list.edit')}</Button>
                                    </Link>

                                    <Button
                                        variant="success"
                                        onClick={() => handleClick(item.id)}
                                        className="me-2"
                                        disabled={registeredEvents[item.id] || item.isClosed}
                                    >
                                        {registeredEvents[item.id] ? t('competitions.list.alreadyRegistered') : t('competitions.list.register')}
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}