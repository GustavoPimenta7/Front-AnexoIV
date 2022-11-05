import React from 'react'
import { CardGroup } from 'react-bootstrap'
import Carde from '../Card'
import Aproveitar from '../../img/Aproveitar.png' 
import Certificado from '../../img/Certificado.png'
import Estagio from '../../img/Estagio.png'
import Frequencia1 from '../../img/Frequencia1.png'
import Sugestao from '../../img/Sugestao.png'
import './group.css'

function Group() {
    return (
        <div >
            <CardGroup className='grupo'>
                <Carde
                    imagem= {Aproveitar}
                    titulo="Aproveitamento"
                    texto="Lorem ipsum... Lorem Ipsum"
                    btn="Buscar"
                />
                <Carde
                    imagem= {Certificado}
                    titulo="Certificados"
                    texto="Lorem ipsum... Lorem Ipsum"
                    btn="Buscar"
                />
                <Carde
                    imagem={Estagio}
                    titulo="Estágios"
                    texto="Lorem ipsum... Lorem Ipsum"
                    btn="Buscar"
                />
            </CardGroup>
            <CardGroup className='grupo'>
                <Carde
                    imagem= {Frequencia1}
                    titulo="Frequência"
                    texto="Lorem ipsum... Lorem Ipsum"
                    btn="Buscar"
                />
                <Carde
                    imagem={megaphone}
                    titulo="Achados/Perdidos"
                    texto="Lorem ipsum... Lorem Ipsum"
                    btn="Buscar"
                />
                <Carde
                    imagem={Sugestao}
                    titulo="Sugestões/Criticas"
                    texto="Lorem ipsum... Lorem Ipsum"
                    btn="Buscar"
                />
            </CardGroup>
        </div>
    )
}

export default Group