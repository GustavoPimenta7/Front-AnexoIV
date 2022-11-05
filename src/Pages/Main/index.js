import React from 'react'
import { Button, Card, CardGroup, Container } from 'react-bootstrap'
import Cabeca_menu from '../../Component/Header_menu';
import dados from '../../img/dados.png'
import Sair from '../../img/sair.png'
import './main.css';
function index() {
    return (
        <div className='App'>
        <Cabeca_menu/>
        <Container className='container1'>
            <CardGroup className='grupo1' >
                <Card className='bg1' text='light' border='light' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={dados} />
                    <Card.Body>
                        <Card.Title>Anexo IV</Card.Title>
                        <Card.Text>
                         <hr></hr>
                        </Card.Text>
                        <Button href= '/AnexoIV' variant="outline-light">Entrar</Button>
                    </Card.Body>
                </Card>
                </CardGroup>

        </Container>

        </div>
    )
}

export default index