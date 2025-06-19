import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {shooters} from "../mocks/Shooters.tsx";
import {Shooter} from "../types/shooters/Shooter.tsx";
import {useNavigate} from "react-router-dom";

export const AddShooter = () => {

    const navigate = useNavigate();

    // @ts-ignore
    const onFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries());

        // @ts-ignore
        const shooter: Shooter = {...formDataObj}
        const shooterWithMaxId = shooters.reduce((prev, current) => (prev && prev.id > current.id) ? prev : current);
        shooter.id = shooterWithMaxId.id + 1;
        shooters.push(shooter);

        navigate(`/shooters`);
    }

    return (
        <Container fluid>
            <Form onSubmit={onFormSubmit}>
                <Row className="mb-3">
                    <Form.Group>
                        <Form.Label>Imie</Form.Label>
                        <Form.Control type="text" name="firstName"/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group>
                        <Form.Label>Nazwisko</Form.Label>
                        <Form.Control type="text" name="lastName"/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group>
                        <Form.Label>Wiek</Form.Label>
                        <Form.Control type="number" name="age"/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group>
                        <Form.Label>Pełny adres</Form.Label>
                        <Form.Control type="text" name="address"/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group>
                        <Form.Label>Pozwolenie</Form.Label>
                        <Form.Control type="text" name="licence"/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group>
                        <Form.Label>Przynależność do klubu</Form.Label>
                        <Form.Control type="text" name="sportClub"/>
                    </Form.Group>
                </Row>
                <Row className="mt-4">
                    <Button variant="primary" className="me-2" type="submit">Dodaj</Button>
                </Row>
            </Form>
        </Container>
    )
}