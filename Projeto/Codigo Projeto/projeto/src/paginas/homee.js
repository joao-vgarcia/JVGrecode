import React, { Component } from 'react';
import './home.css';
import { IoIosSearch } from 'react-icons/io';
import imagem from './folhas.PNG'



class Homee extends Component {
    render() {
        return (
            <div>
                <img src={imagem} id="imagemfolhas"></img>
                <div className="col-8" aligncontent='center'>
                    <h2>Prestadores qualificados</h2>
                    <h3>Vejas os perfis, detalhes e avalizações de cada  profissional  que você contratar. Nada de surpresas desagradáveis!</h3>
                </div>

            </div>


        )
    }

}
export default Homee;