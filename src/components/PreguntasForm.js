import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const PreguntasForm = () => {

    const objForm = {
        name: ''
    }

    const [form, setForm] = useState(objForm);

    const handleForm = (e)=>{
        let obj = {...form, [e.target.name]: e.target.value};
        setForm(obj)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Enviar formulario");
        setForm(objForm)
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="name">Para Iniciar Ingrese su Nombre</Form.Label>
                    <Form.Control value={form.name} onChange={handleForm} name="name" id="name" type="text" placeholder="Nombre" />
                </Form.Group>
                
                <Button type="submit">Guardar</Button>
            </Form>
        </div>
    )
}

export default PreguntasForm
