import { Alert, Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import Logo from '../../img/branco.png'
import './bot.css';

function Botao() {


  const [enviar, setEnviar] = useState ("");
  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState ("");

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <div className='teste'>

      {/* <Modal
      > */}

        <Modal.Body>
          <section className='sectionImg'>
            <img src={Logo} className='img' />
          </section>
          <section>

          <div className="wrap-input">
          <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <button className="button"> Entrar </button>
          <>
            {[
              '',
            ].map((variant) => (
              <Alert key={variant} variant={variant}>
                <Alert.Link href="https://i0.wp.com/files.agro20.com.br/uploads/2019/06/burro-03.jpg?fit=1920%2C1440&ssl=1">Esqueceu sua senha?</Alert.Link>
              </Alert>
            ))}
          </>
        </Modal.Footer>
      {/* </Modal> */}
    </div>
  )
}


export default Botao