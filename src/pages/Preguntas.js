import { Button, Card } from "react-bootstrap";

const Preguntas = () => {
    return (
        <>
            <h2>Preguntas</h2>
            <Card className="text-center">
                <Card.Body>
                    <Card.Text>
                        Hola Hola
                    </Card.Text>
                </Card.Body>
            </Card>
            <>
                <Button variant="primary">Primary</Button>{' '}
                <Button variant="primary">Primary</Button>{' '}
                <Button variant="primary">Primary</Button>{' '}
                <Button variant="primary">Primary</Button>{' '}
            </>
        </>
    );
}
export default Preguntas;