import React from 'react'
import { Card,Button,CardGroup } from 'react-bootstrap'
import './style.css'



function Carde(props) {
    return (
        <div>   
            
            <CardGroup>   
            <Card className='bgCard' text='light' border='light' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.imagem} />
                <Card.Body>
                    <Card.Title>{props.titulo}</Card.Title>
                    <Card.Text>
                        {props.texto}
                    </Card.Text>
                    <Button  variant="outline-light">{props.btn}</Button>
                </Card.Body>
            </Card>  
            </CardGroup>       
        </div>
    )
}

export default Carde