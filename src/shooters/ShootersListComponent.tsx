import Table from "react-bootstrap/Table";
import {shooters} from "../mocks/Shooters.tsx";
import {Link, useNavigate} from "react-router-dom";
import {Form} from "react-bootstrap";
import {useEffect, useMemo, useState} from "react";
import {Shooter} from "../types/shooters/Shooter.tsx";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useTranslation} from "react-i18next";

export const ShootersListComponent = () => {
    const { t } = useTranslation();
    const [shootersList, setShootersList] = useState<Shooter[]>([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setShootersList(shooters);
    }, []);

    const filteredShooters = useMemo(() => {
        const lowerSearch = search.toLowerCase();
        return shootersList.filter(
            (s) =>
                s.firstName.toLowerCase().includes(lowerSearch) ||
                s.lastName.toLowerCase().includes(lowerSearch)
        );
    }, [search, shootersList]);

    const goToEdit = (id: number) => {
        navigate(`/shooters/${id}/edit`);
    };

    return (
        <Container fluid className="mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <Accordion defaultActiveKey="filtrowanie" className="flex-grow-1 me-3">
                    <Accordion.Item eventKey="filtrowanie">
                        <Accordion.Header>🔍 {t('shooters.search')}</Accordion.Header>
                        <Accordion.Body>
                            <Form.Control
                                type="text"
                                placeholder={t('shooters.searchPlaceholder')}
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                autoComplete="off"
                            />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

            <Row className="mb-3">
                <Col className="text-end">
                    <Link to={`/shooters/new`}>
                        <Button variant="primary">+ {t('shooters.new')}</Button>
                    </Link>
                </Col>
            </Row>

            <Table striped bordered hover responsive className="shadow-sm">
                <thead className="table-light">
                <tr>
                    <th>Id</th>
                    <th>{t('shooters.list.firstname')}</th>
                    <th>{t('shooters.list.lastname')}</th>
                    <th>{t('shooters.list.age')}</th>
                    <th>{t('shooters.list.licence')}</th>
                    <th>{t('shooters.list.address')}</th>
                    <th style={{width: 100}}>{t('shooters.list.actions')}</th>
                </tr>
                </thead>
                <tbody>
                {filteredShooters.length === 0 ? (
                    <tr>
                        <td colSpan={7} className="text-center text-muted">
                            {t('shooters.list.noResults')}
                        </td>
                    </tr>
                ) : (
                    filteredShooters.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.age}</td>
                            <td>{item.licence}</td>
                            <td>{item.address}</td>
                            <td>
                                <Button
                                    size="sm"
                                    variant="outline-primary"
                                    onClick={() => goToEdit(item.id)}
                                >
                                    {t('shooters.list.edit')}
                                </Button>
                            </td>
                        </tr>
                    ))
                )}
                </tbody>
            </Table>
        </Container>
    );
}