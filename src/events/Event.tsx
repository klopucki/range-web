import {useParams} from "react-router-dom";
import Container from "react-bootstrap/Container";

export const Event = () => {
    const { id } = useParams();

    return (
        <Container>
            <h1>Event {id}</h1>
            <p>You opened article #{id}</p>
            {/* You could fetch or pull the data using the id here */}
        </Container>
    );
};
