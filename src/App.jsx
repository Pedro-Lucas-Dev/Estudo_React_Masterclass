import './App.css'
import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParamentro from './components/basicos/ComParamentro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai.jsx'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'


export default props => 
    <div className="App">
        <h1> Fundamentos React </h1>
        <div className="Cards">
            <Card
                titulo=" # 11 - Mega "
                color="#333332"
            >
                <Mega qtdeNumero={6}/>
            </Card>

            <Card
                titulo=" #10 - Contador "
                color="#8BAD39"
            >
                <Contador 
                    passo={10} 
                    valor={100}
                />
            </Card>

            <Card
                titulo=" #09 - input"
                color="#FF85CB"
            >
                <Input />
            </Card>

            <Card 
                titulo=" #08 - Comunicação indireta "
                color="#60047A"
            >
                <Super />
            </Card>

            <Card
                titulo=" #07 - Comunicação direta" 
                color=" #59323C"
            >
                <Pai sobrenome=" Freitas"/>
            </Card>

            <Card 
                titulo=" #06 - Condicional usando if " 
                color="#69D2E7"
            >
                <CondicionalComIf numero={10}/>      
            </Card>

            <Card 
                titulo=" #05 - Condicional "
                color="#E8B71A"
            >
                <Condicional numero={11}/>
            </Card>

            <Card 
                titulo=" #04 - Repetição "
                color="#1FDA9A"
            >
                <Repeticao />
            </Card>

            <Card 
                titulo=" #03 - Componente Com Filhos "
                color=" #5BB12F"
            >
                <ComFilhos>
                    <ul>

                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>

                    </ul>
                </ComFilhos>
            </Card>

            <Card 
                titulo=" #02 - Componente Com Paramentro "
                color="#982395"
            >
                <ComParamentro 
                    titulo=" Esse é o título "
                    subtitulo=" Esse é o subtítulo "
                />
            </Card>

            <Card 
                titulo=" #01 - Primeiro Componente "
                color="#260126"
            >
                <Primeiro />
            </Card>
        </div>  
    </div>