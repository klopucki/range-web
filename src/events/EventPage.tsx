import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Badge, Button, Col, Container, Image, Row} from "react-bootstrap";
import {news} from "../mocks/News.tsx";
import {AppEvent} from "../types/events/appEvent.ts";
import Linkify from "linkify-react";
import 'leaflet/dist/leaflet.css';
import {MapContainer} from "react-leaflet/MapContainer";
import {Marker} from "react-leaflet/Marker";
import {Popup} from "react-leaflet/Popup";
import {TileLayer} from "react-leaflet";

import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import {useTranslation} from "react-i18next";

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

export const EventPage = () => {
    const {id} = useParams<{ id: string }>();
    const navigate = useNavigate();
    const {t} = useTranslation();

    const [event, setEvent] = useState<AppEvent | null>(null);

    useEffect(() => {
        if (id) {
            const foundEvent = news.find(e => e.id === +id);
            setEvent(foundEvent || null);
        }
    }, [id, news]);

    if (!event) {
        return (
            <Container className="text-center py-5">
                <h2>{t('event.notFound')}</h2>
                <Button variant="secondary" onClick={() => navigate("/events")}>{t('event.back')}</Button>
            </Container>
        );
    }

    const eventDate = event.date;
    const formattedDate = eventDate.toLocaleDateString(undefined, {
        weekday: "long", year: "numeric", month: "long", day: "numeric"
    });

    const linkyfyOptions = {
        rel: 'noopener noreferrer',
    };

    const position: [number, number] | null =
        event.lat !== undefined && event.lon !== undefined ? [event.lat, event.lon] : null;

    return (
        <Container className="my-5" style={{maxWidth: "900px"}}>
            <Button variant="outline-secondary" onClick={() => navigate("/")}>← {t('event.back')}</Button>

            <h1 className="mt-3">{event.title}</h1>
            {event.subtitle && <h5 className="text-muted mb-3">{event.subtitle}</h5>}

            <Image src={event.image} alt={event.title} fluid rounded className="mb-4 shadow-sm"/>

            <Row className="mb-3">
                <Col md={6}>
                    <h5>{t('event.date')}</h5>
                    <p>{formattedDate} at {formattedDate || "TBA"}</p>
                </Col>
                <Col md={6}>
                    <h5>{t('event.location')}</h5>
                    <p>{event.location || "Online"}</p>
                </Col>
            </Row>

            <h4>{t('event.description')}</h4>
            <p style={{whiteSpace: "pre-line"}}>
                <Linkify options={linkyfyOptions}>{event.description}</Linkify>
            </p>

            {event.organizer && (
                <div className="mb-3">
                    <h5>{t('event.organizer')}</h5>
                    <p>{event.organizer}</p>
                </div>
            )}

            {event.tags?.length > 0 && (
                <div className="mb-3">
                    {event.tags.map(tag => (
                        <Badge bg="info" key={tag} className="me-2">{tag}</Badge>
                    ))}
                </div>
            )}

            {position && (
                <MapContainer
                    center={position}
                    zoom={15}
                    scrollWheelZoom={false}
                    style={{height: "400px", width: "100%", maxWidth: "500px", margin: "auto"}}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            {event.title}<br/>{event.location}
                        </Popup>
                    </Marker>
                </MapContainer>
            )}
        </Container>
    );
};