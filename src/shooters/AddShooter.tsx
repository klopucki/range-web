import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {shooters} from "../mocks/Shooters.tsx";
import {Shooter} from "../types/shooters/Shooter.tsx";
import {useNavigate} from "react-router-dom";
import Col from "react-bootstrap/Col";
import {useTranslation} from "react-i18next";

export const AddShooter = () => {

    const navigate = useNavigate();
    const {t} = useTranslation();

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const formDataObj = Object.fromEntries(formData.entries());

        // Type conversion since FormData entries are strings by default
        const newShooter: Shooter = {
            id: 0, // Will set later
            firstName: String(formDataObj.firstName || ""),
            lastName: String(formDataObj.lastName || ""),
            age: Number(formDataObj.age) || 18,
            address: String(formDataObj.address || ""),
            licence: String(formDataObj.licence || ""),
            sportClub: String(formDataObj.sportClub || "")
        };

        // Safely find max id or default 0
        const maxId = shooters.length > 0 ? Math.max(...shooters.map(s => s.id)) : 0;
        newShooter.id = maxId + 1;

        shooters.push(newShooter);

        navigate("/shooters");
    };

    const handleCancel = () => {
        navigate("/shooters");
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{minHeight: "80vh"}}>
            <div style={{width: "100%", maxWidth: "800px"}}>
                <h3 className="mb-4">{t('shooters.details.addShooter')}</h3>
                <Form onSubmit={onFormSubmit}>
                    <Row>
                        <Col xs={12} md={6} className="mb-3">
                            <Form.Group controlId="firstName">
                                <Form.Label>{t('shooters.details.firstname')}</Form.Label>
                                <Form.Control type="text" name="firstName"
                                              placeholder={t('shooters.details.placeholder.firstname')} required/>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6} className="mb-3">
                            <Form.Group controlId="lastName">
                                <Form.Label>{t('shooters.details.lastname')}</Form.Label>
                                <Form.Control type="text" name="lastName"
                                              placeholder={t('shooters.details.placeholder.lastname')} required/>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6} className="mb-3">
                            <Form.Group controlId="age">
                                <Form.Label>{t('shooters.details.age')}</Form.Label>
                                <Form.Control type="number" name="age" min={0} required/>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6} className="mb-3">
                            <Form.Group controlId="address">
                                <Form.Label>{t('shooters.details.address')}</Form.Label>
                                <Form.Control type="text" name="address"
                                              placeholder={t('shooters.details.placeholder.address')} required/>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6} className="mb-3">
                            <Form.Group controlId="licence">
                                <Form.Label>{t('shooters.details.licence')}</Form.Label>
                                <Form.Control type="text" name="licence"
                                              placeholder={t('shooters.details.placeholder.licence')}/>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6} className="mb-3">
                            <Form.Group controlId="sportClub">
                                <Form.Label>{t('shooters.details.club')}</Form.Label>
                                <Form.Control type="text" name="sportClub"
                                              placeholder={t('shooters.details.placeholder.club')}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col>
                            <Button variant="primary" type="submit" className="me-2">
                                {t('shooters.details.add')}
                            </Button>
                            <Button variant="secondary" onClick={handleCancel}>
                                {t('shooters.details.cancel')}
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Container>
    );
}