import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {shooters} from "../mocks/Shooters.tsx";
import {Shooter} from "../types/shooters/Shooter.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {ChangeEvent, useEffect, useState} from "react";

export const ShooterDetails = () => {
    const {id} = useParams();


    const [formData, setFormData] = useState<Shooter>({
        id: 0,
        firstName: "",
        lastName: "",
        // fixme change to date instead of age
        // birthDate: Date,
        age: 18,
        licence: "",
        address: "",
        sportClub: ""
    });

    useEffect(() => {
        if (id) {
            const shooter = shooters.find(shooter => shooter.id === +id);

            if (shooter) {
                setFormData(shooter);
            }

            console.log(shooter);
        }
    }, [id]);


    const navigate = useNavigate();

    // @ts-ignore
    const onFormSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries());

        // @ts-ignore
        const shooter: Shooter = {...formDataObj}
        if (!id) {
            const maxShooterId = shooters.reduce((prev, current) => (prev && prev.id > current.id) ? prev : current).id;
            shooter.id = maxShooterId + 1;
            shooters.push(shooter);
        } else {
            const index = shooters.findIndex(s => s.id === +shooter.id);
            if (index !== -1) {
                shooter.id = +shooter.id; // form change to string
                shooters[index] = shooter;
            }
        }

        navigate(`/shooters`);
    }

    const changeValueMethod = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value, type} = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: type === "number" ? Number(value) : value,
        }));
    }

    return (
        <Container fluid>
            <Form onSubmit={onFormSubmit}>

                <Row className="mb-3">
                    <Form.Group>
                        <Form.Label>Id</Form.Label>
                        <Form.Control type="text" readOnly={true} value={formData.id} name="id"
                                      onChange={changeValueMethod}/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group>
                        <Form.Label>Imie</Form.Label>
                        <Form.Control type="text" value={formData.firstName} name="firstName"
                                      onChange={changeValueMethod}/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group>
                        <Form.Label>Nazwisko</Form.Label>
                        <Form.Control type="text" value={formData.lastName} name="lastName"
                                      onChange={changeValueMethod}/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group>
                        <Form.Label>Wiek</Form.Label>
                        <Form.Control type="number" value={formData.age} name="age" onChange={changeValueMethod}/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group>
                        <Form.Label>Pełny adres</Form.Label>
                        <Form.Control type="text" value={formData.address} name="address" onChange={changeValueMethod}/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group>
                        <Form.Label>Pozwolenie</Form.Label>
                        <Form.Control type="text" value={formData.licence} name="licence" onChange={changeValueMethod}/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group>
                        <Form.Label>Przynależność do klubu</Form.Label>
                        <Form.Control type="text" value={formData.sportClub} name="sportClub"
                                      onChange={changeValueMethod}/>
                    </Form.Group>
                </Row>
                <Row className="mt-4">
                    <Button variant="primary" className="me-2"
                            type="submit">{id ? 'Zaktualizuj Strzelca' : 'Dodaj Strzelca'}</Button>
                </Row>
            </Form>
        </Container>
    )
}