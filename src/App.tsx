import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {Carousel} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {AppEvent} from "./types/events/appEvent.ts";
import {news} from "./mocks/News.tsx";
import {caruselData} from "./mocks/CarouselData.tsx";
import {useTranslation} from "react-i18next";


export const CURRENT_USER_ID = 1; // todo fetch

function App() {
    const {t} = useTranslation();

    const [newsData, setNewsData] = useState<AppEvent[]>([]);
    useEffect(() => {
        setNewsData(news);
    }, [])

    const [featuredNews, setFeaturedNews] = useState<AppEvent[]>([]);
    useEffect(() => {
        setFeaturedNews(caruselData);
    }, [])

    const navigate = useNavigate();
    const handleClick = (id: any) => {
        navigate(`/event/${id}`);
    };

    return (
        <div>
            <Carousel interval={5000}>
                {featuredNews.map((news, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={news.image}
                            alt={`Slide ${index + 1}`}
                        />
                        <Carousel.Caption>
                            <h3>{news.title}</h3>
                            <p>{news.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            <Container className="mt-4">
                <h1 className="mb-4">{t('event.latest')}</h1>
                <Row>
                    {newsData.map((item, index) => (
                        <Col key={index} md={6} lg={4} className="mb-4">
                            <Card onClick={() => handleClick(item.id)} style={{cursor: "pointer"}}>
                                <Card.Img variant="top" src={item.image}/>
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default App;