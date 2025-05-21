import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export const MakeReservation = () => {

    return (
        <Container fluid>
            <Form>
                <Row className="mt-3">
                    <Row className="mb-3">
                        <Form.Group>
                            <Form.Label>Imie</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group>
                            <Form.Label>Nazwisko</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group>
                            <Form.Label>Pełny adres</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Check>
                            <Form.Check
                                type="checkbox"
                                label="Strzelam z własnej broni"
                            />
                        </Form.Check>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group>
                            <Form.Label>Data i godzina rezerwacji</Form.Label>
                            <Form.Control type="datetime-local"/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group>
                            <Form.Label>Potrzebuję osoby asystującej</Form.Label>
                            <Form.Select>
                                <option>Wybierz</option>
                                <option value="1">Tak</option>
                                <option value="2">Nie</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                </Row>
            </Form>
            <Row className="mt-4">
                <Button variant="primary" className="me-2">Rezerwuj</Button>
            </Row>
        </Container>
    );
};
