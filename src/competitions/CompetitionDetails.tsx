import {Alert, Button, Container, ListGroup} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import {competitions, registeredShooters} from "../mocks/Competitions.tsx";
import Card from "react-bootstrap/Card";
import {useEffect, useState} from "react";
import {Shooter} from "../types/shooters/Shooter.tsx";
import {shooters} from "../mocks/Shooters.tsx";
import {CURRENT_USER_ID} from "../App.tsx";
import {useTranslation} from "react-i18next";

export const CompetitionDetails = () => {

    const {competitionId} = useParams();
    const competition = competitions.find(c => c.id === +competitionId!);
    const [isRegistered, setIsRegistered] = useState(false);
    const {t} = useTranslation();

    if (!competition) {
        return <Container className="mt-4">Nie znaleziono zawodów.</Container>;
    }

    const [showAlert, setShowAlert] = useState(false);
    const handleClick = () => {
        setShowAlert(true);

        registeredShooters.push({shooterId: CURRENT_USER_ID, eventId: +competitionId!})

        setUpEventShooters();

        setTimeout(() => setShowAlert(false), 4000);
    };

    const [eventShooters, setEventShooters] = useState<Shooter[]>([]); // List of registered shooters

    function setUpEventShooters() {
        const shooterIds = registeredShooters.filter(rs => rs.eventId === +competitionId!).map(value => value.shooterId);
        const s: Shooter[] = shooters.filter(shooter => shooterIds.includes(shooter.id))
        setEventShooters(s);
        setIsRegistered(s.some(shooter => shooter.id === CURRENT_USER_ID));
    }

    useEffect(() => {
        setUpEventShooters();
    }, []);


    return (
        <Container className="mt-4">
            <Card className="shadow-sm">
                {competition.img && (
                    <Card.Img variant="top" src={competition.img} style={{maxHeight: 300, objectFit: "cover"}}/>
                )}
                <Card.Body>
                    <Card.Title>{competition.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">#{competition.id}</Card.Subtitle>

                    <p><strong>{t('competitions.details.eventDate')}:</strong> {competition.date}</p>
                    <p><strong>{t('competitions.details.registerTo')}:</strong> {competition.registrationDate}</p>
                    <p><strong>{t('competitions.details.extendsLicence')}:</strong> {competition.extendsLicence ? t('competitions.details.yes') : t('competitions.details.no')}</p>

                    <hr/>
                    <p>{competition.description}</p>

                    <div className="mt-3">
                        <Button
                            variant="success"
                            onClick={handleClick}
                            className="me-2"
                            disabled={isRegistered || competition.isClosed}
                        >
                            {isRegistered ? t('competitions.details.alreadyJoined') : t('competitions.details.join')}
                        </Button>
                        <Button size="sm" as={Link} to={`/competitions/${competitionId}/upsert`}
                                variant="secondary">{t('competitions.details.edit')}</Button>

                    </div>
                </Card.Body>
            </Card>

            {showAlert && (
                <Alert
                    variant="success"
                    onClose={() => setShowAlert(false)}
                    dismissible
                    className="mt-3"
                >
                    ✅ {t('competitions.details.registered')}
                </Alert>
            )}

            <Card className="mt-4 shadow-sm">
                <Card.Header>📋 {t('competitions.details.signedUpShooters')}</Card.Header>
                <ListGroup variant="flush">
                    {eventShooters.length > 0 ? (
                        eventShooters.map((shooter) => (
                            <ListGroup.Item key={shooter.id}>
                                {shooter.firstName} {shooter.lastName}
                                <span className="float-end text-muted">
                            15 pkt
                        </span>
                            </ListGroup.Item>
                        ))
                    ) : (
                        <ListGroup.Item>{t('competitions.details.noResults')}</ListGroup.Item>

                    )}
                </ListGroup>
            </Card>
        </Container>
    );
}