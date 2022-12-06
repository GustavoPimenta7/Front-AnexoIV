import { Button, Form, Container } from "react-bootstrap";
import branco from '../../img/branco.png'
import React from "react";
import './Confim.css';

function Index() {

    const MonthNow = new Date();
    const Month = MonthNow.getMonth() + 1

    return (
        <div className="Container">

            <Container className="Container3">
                <img src={branco} className='ImgConfirm' />

                <Form.Label className="LabelP">Neste mês {Month}, há reposição para fazer?</Form.Label>

                <div className="DivBotoesConfirm">
                    <Button id='B1' href="/AnexoIV" className="Botao01">Sim</Button>
                    <Button id='B2' href="/Quadroreposicao" className="Botao02">Não</Button>
                </div>
            </Container>
        </div>
    );
}
export default Index;