import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {shooters} from "../mocks/Shooters.tsx";
import {Shooter} from "../types/shooters/Shooter.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {ChangeEvent, useEffect, useState} from "react";
import {Col} from "react-bootstrap";
import {useTranslation} from "react-i18next";

export const ShooterDetails = () => {
    const {id} = useParams<{ id: string }>();
    const navigate = useNavigate();
    const {t} = useTranslation();

    const [formData, setFormData] = useState<Shooter>({
        id: 0,
        firstName: "",
        lastName: "",
        age: 0,
        licence: "",
        address: "",
        sportClub: ""
    });

    useEffect(() => {
        if (id) {
            const shooter = shooters.find((s) => s.id === +id);
            if (shooter) setFormData(shooter);
        }
    }, [id]);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const {name, value, type} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "number" ? Number(value) : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!id) {
            const maxId = shooters.length
                ? Math.max(...shooters.map((s) => s.id))
                : 0;
            const newShooter = {...formData, id: maxId + 1};
            shooters.push(newShooter);
        } else {
            const index = shooters.findIndex((s) => s.id === +id);
            if (index !== -1) {
                shooters[index] = formData;
            }
        }
        navigate("/shooters");
    };

    const handleCancel = () => {
        navigate("/shooters");
    };

    return (
        <Container fluid="md" className="mt-4">
            <h3>{t('shooters.details.edit')}</h3>
            <Form onSubmit={handleSubmit}>
                <Row>

                    <Col md={6}>
                        <Form.Group controlId="firstName" className="mb-3">
                            <Form.Label>{t('shooters.details.firstname')}</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder={t('shooters.details.placeholder.firstname')}
                                required
                            />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group controlId="lastName" className="mb-3">
                            <Form.Label>{t('shooters.details.lastname')}</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder={t('shooters.details.placeholder.lastname')}
                                required
                            />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group controlId="age" className="mb-3">
                            <Form.Label>{t('shooters.details.age')}</Form.Label>
                            <Form.Control
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group controlId="licence" className="mb-3">
                            <Form.Label>{t('shooters.details.licence')}</Form.Label>
                            <Form.Control
                                type="text"
                                name="licence"
                                value={formData.licence}
                                onChange={handleChange}
                                placeholder={t('shooters.details.placeholder.licence')}
                            />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group controlId="sportClub" className="mb-3">
                            <Form.Label>{t('shooters.details.club')}</Form.Label>
                            <Form.Control
                                type="text"
                                name="sportClub"
                                value={formData.sportClub}
                                onChange={handleChange}
                                placeholder={t('shooters.details.placeholder.club')}
                            />
                        </Form.Group>
                    </Col>

                    <Col md={12}>
                        <Form.Group controlId="address" className="mb-3">
                            <Form.Label>{t('shooters.details.address')}</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={2}
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder={t('shooters.details.placeholder.address')}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col>
                        <Button type="submit" variant="primary" className="me-2">
                            {id ? t('shooters.details.update') : t('shooters.details.add')}
                        </Button>
                        <Button variant="secondary" onClick={handleCancel}>
                            {t('shooters.details.cancel')}
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}