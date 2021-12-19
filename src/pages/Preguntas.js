import { Button, Card, Col } from "react-bootstrap";
import PreguntasForm from "../components/PreguntasForm";

const Preguntas = () => {
    return (
        <>
            <h2>Preguntas</h2>
            <PreguntasForm mensaje="Hola Mundo desde PreguntasForm" /><br></br>
            <Card className="text-center">
                <Card.Body>
                    <Card.Text>
                        Hola Hola
                    </Card.Text>
                </Card.Body>
            </Card>
            <>
                <Col>
                    <Button variant="primary">Primary</Button>{' '}
                    <Button variant="primary">Primary</Button>{' '}
                </Col>
                <Col>
                    <Button variant="primary">Primary</Button>{' '}
                    <Button variant="primary">Primary</Button>{' '}
                </Col>


            </>
        </>
    );
}
export default Preguntas;