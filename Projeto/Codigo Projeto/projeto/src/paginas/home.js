import React, { Component } from 'react';
import './home.css';
import { IoIosSearch } from 'react-icons/io';
import imagem from './folhas.PNG'


class Home extends Component {

    render() {
        return (
            <div >

                <div className="container-fluid" id="cont">

                    <form id="bacc">
                        <div className="form-row">
                            <div className="col-12">
                                <label>
                                    <h2 id="cabecalho">Encontre prestadores de serviços na sua comunidade</h2>
                                </label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-12">
                                <label>
                                    <h3 id="cabecalho">Digite o serviço que precisa e entre em contato com profissionais da sua região, direto do seu celular </h3>
                                    <div className="input-group">
                                        <input type="text" class="form-control col-md-4 col-xs-4 col-lg-4 col-sm-4" placeholder="Do que você precisa?" id="inputText" ></input>
                                        <span className="input-group-text"><IoIosSearch></IoIosSearch></span>
                                    </div>
                                </label>
                            </div>

                        </div>
                        <div className="form-row">
                            <button className="btn col-md-3 col-sm-3 col-xs-3" type="button" id="botaodownload">Download</button>
                            <button className="btn col-md-3 col-sm-3 col-xs-3" type="button" id="botaoSaibaMais">Saiba Mais</button>

                        </div>
                     
                    </form>


                </div>
                <div className="container-fluid">
                            <img src={imagem} id="imagemfolhas"></img>
                            <div className="col-8" aligncontent='center'>
                                <h2>Prestadores qualificados</h2>
                                <h3>Vejas os perfis, detalhes e avalizações de cada  profissional  que você contratar. Nada de surpresas desagradáveis!</h3>
                            </div>

                        </div>

            </div>

        )
    }
}
export default Home;
