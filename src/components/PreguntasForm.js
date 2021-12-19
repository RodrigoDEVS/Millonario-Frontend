import React from 'react'
import { Form, Button } from 'react-bootstrap'

const PreguntasForm = () => {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="TextInput">Para Iniciar Digite su Nombre</Form.Label>
                    <Form.Control id="TextInput" placeholder="Nombre" />
                </Form.Group>
                <fieldset disabled>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="TextInput">Puntaje Acumulado</Form.Label>
                    <Form.Control id="TextInput"/>
                </Form.Group>
                </fieldset>
                <Button type="submit">Guardar</Button>
            </Form>
        </div>
    )
}

export default PreguntasForm
