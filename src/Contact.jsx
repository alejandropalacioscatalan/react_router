import React from "react";

// const Contact = () => {
//   return (
//     <>
//       <h1>Este es Contacto</h1>
//       <br />
//     </>
//   );
// };

// export default Contact;

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <Form>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          paddingTop: "30px",
        }}
      >
        <h1>Cuéntanos, ¿en que te podemos ayudar?</h1>
        <Form.Group className="w-50" controlId="exampleForm.ControlInput1">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="w-50" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="w-30" controlId="exampleForm.Button">
          <Button variant="danger" size="lg">
            Enviar
          </Button>
        </Form.Group>
      </div>
    </Form>
  );
}

export default Contact;
