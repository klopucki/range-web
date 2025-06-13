import {useEffect, useState} from "react";
import {Badge, Button, Col, Container, Image, Modal, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {Competition} from "../types/competitions/Competition.tsx";
import {competitions} from "../mocks/Competitions.tsx";

export const CompetitionDetails = () => {

    const {competitionId} = useParams();

    const [competition, setCompetition] = useState<Competition>({
        id: 3,
        title: 'PIRO',
        date: '12-23-2025',
        registrationDate: '12-15-2025',
        extendsLicence: true,
        description: 'Secret',
        img: 'https://via.placeholder.com/400x300?text=Competition+Image'
    });

    useEffect(() => {
        if (competitionId) {
            const comp = competitions.find(c => c.id === +competitionId);

            if (comp) {
                setCompetition(comp);
            }
        }
    }, [competitionId]);

    const [showModal, setShowModal] = useState(false);

    const handleRegister = () => {
        setShowModal(true);
    };

    const handleConfirm = () => {
        setShowModal(false);
    };

    return (
        <div style={{backgroundColor: "#f8f9fa", minHeight: "100vh", paddingBottom: "3rem"}}>
            <div style={{position: "relative"}}>
                <Image src={competition.img} fluid style={{width: "100%", maxHeight: "400px", objectFit: "cover"}}/>
                <div
                    style={{
                        position: "absolute",
                        bottom: 20,
                        left: 30,
                        color: "white",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        padding: "1rem 2rem",
                        borderRadius: "10px"
                    }}
                >
                    <h1>{competition.title}</h1>
                    {competition.extendsLicence && (
                        <Badge bg="success" className="mt-2">
                            Extends Licence
                        </Badge>
                    )}

                </div>
            </div>

            <Container className="mt-5">
                <Row className="mb-4">
                    <Col md={6} className="mb-3">
                        <div className="mt-3">
                            <Button variant="success" size="lg" onClick={handleRegister}>
                                Register Now
                            </Button>
                        </div>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md={6} className="mb-3">
                        <h4>Date of Competition</h4>
                        <p>{new Date(competition.date).toLocaleDateString()}</p>
                    </Col>
                    <Col md={6} className="mb-3">
                        <h4>Registration Deadline</h4>
                        <p>{new Date(competition.registrationDate).toLocaleDateString()}</p>
                    </Col>

                </Row>

                <Row>
                    <Col>
                        <h4>About the Competition</h4>
                        <p>
                            The {competition.title} is an exciting event where top competitors will showcase
                            their skills. Don't miss your chance to participate or cheer them on!
                        </p>
                    </Col>
                </Row>
            </Container>

            <Modal show={showModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>We will wait for you on this event in the event day. </p>
                    <p>We sent you confirmation on your <b>email</b>.</p>
                    Best shoots!
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" onClick={handleConfirm}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}