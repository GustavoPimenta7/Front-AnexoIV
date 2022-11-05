import React from 'react'
import { Button, Col, Card, CardGroup, Container } from 'react-bootstrap'
import Cabeca_anexo from '../../Component/Header_anexo'
import orientacao from '../../img/orientacao.png'
import plano from '../../img/plano.png'
import planejador from '../../img/planejador.png'
import './anex.css'
function index() {
    return (
        <div className='App'>
        <Cabeca_anexo />
        <Container className='Container'>
            <CardGroup className='grupo' >
                <Card className='bg3' text='light' border='light' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={orientacao} />
                    <Card.Body>
                        <Card.Title>Controle/Reposições</Card.Title>
                        <Card.Text>
                        <hr></hr> 
                        </Card.Text>
                        <Button href='/Controlereposicao'variant="outline-light">Entrar</Button>

                    </Card.Body>
                </Card>
                <Card className='bg3' text='light' border='light' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={planejador} />
                    <Card.Body>
                        <Card.Title>Quadro/Reposições</Card.Title>
                        <Card.Text>
                        <hr></hr>
                        </Card.Text>
                        <Button href='/Quadroreposicao'variant="outline-light">Entrar</Button>
                    </Card.Body>
                </Card>
                <Card className='bg3' text='light' border='light' style={{ width: '12rem' }}>
                    <Card.Img variant="top" src={plano} />
                    <Card.Body>
                        <Card.Title>Plano/Reposições</Card.Title>
                        <Card.Text>
                         <hr></hr>
                        </Card.Text>
                        <Button href='/Planoreposicao'variant="outline-light">Entrar</Button>
                    </Card.Body>
                </Card>
                
            </CardGroup>
            
           
        </Container>

    </div>

    )};

export default index
    