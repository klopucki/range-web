import {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Competition} from "../types/competitions/Competition.tsx";
import {useTranslation} from "react-i18next";

// @ts-ignore
export function CompetitionForm({competition = null, onSubmit}) {
    const {t} = useTranslation();
    const [formData, setFormData] = useState({
        id: "",
        title: "",
        eventDay: "",
        registerTo: "",
        extendsLicence: false,
        isClosed: false,
        imageUrl: "",
        description: "",
    });

    useEffect(() => {
        if (competition) {
            setFormData({
                id: competition.id,
                title: competition.title || "",
                eventDay: competition.date || "",
                registerTo: competition.registrationDate || "",
                extendsLicence: competition.extendsLicence || false,
                isClosed: competition.isClosed || false,
                imageUrl: competition.img || "",
                description: competition.description || "",
            });
        }
    }, [competition]);

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.title.trim()) {
            alert(t('competitions.form.alerts.mandatoryTitle'));
            return;
        }
        if (!formData.eventDay) {
            alert(t('competitions.form.alerts.dateTitle'));
            return;
        }
        const asd : Competition = {
            id: +formData.id,
            title: formData.title,
            date: formData.eventDay,
            registrationDate: formData.registerTo,
            extendsLicence: formData.extendsLicence,
            isClosed: formData.isClosed,
            img: formData.imageUrl,
            description: formData.description,
        };
        onSubmit && onSubmit(asd);
    };

    return (
        <Container className="mt-4" style={{maxWidth: "600px"}}>
            <Card className="p-4 shadow-sm">
                <h3 className="mb-4">{competition ? t('competitions.form.edit') : t('competitions.form.add')}</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>{t('competitions.form.title')}</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder={t('competitions.form.placeholder.title')}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="eventDay">
                        <Form.Label>{t('competitions.form.date')}</Form.Label>
                        <Form.Control
                            type="date"
                            name="eventDay"
                            value={formData.eventDay}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="registerTo">
                        <Form.Label>{t('competitions.form.registerTo')}</Form.Label>
                        <Form.Control
                            type="date"
                            name="registerTo"
                            value={formData.registerTo}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="extendsLicence">
                        <Form.Check
                            type="checkbox"
                            label={t('competitions.form.extendsLicence')}
                            name="extendsLicence"
                            checked={formData.extendsLicence}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="isClosed">
                        <Form.Check
                            type="checkbox"
                            label={t('competitions.form.closed')}
                            name="isClosed"
                            checked={formData.isClosed}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="imageUrl">
                        <Form.Label>{t('competitions.form.img')}</Form.Label>
                        <Form.Control
                            type="url"
                            name="imageUrl"
                            value={formData.imageUrl}
                            onChange={handleChange}
                            placeholder="https://..."
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>{t('competitions.form.description')}</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder={t('competitions.form.placeholder.description')}
                        />
                    </Form.Group>

                    <Button type="submit" variant="primary">
                        {competition ? t('competitions.form.addCompetition') : t('competitions.form.updateCompetition')}
                    </Button>
                </Form>
            </Card>
        </Container>
    );
}