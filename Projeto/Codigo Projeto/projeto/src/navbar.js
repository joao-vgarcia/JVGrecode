import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';





class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-light">
                  

                    <a className="navbar-brand" id="alfa"><img src="https://i.pinimg.com/564x/40/8c/e5/408ce55a7b47ca8e1ffcc3a6362a9dba.jpg" width="50px;"></img>                 Faz um bico!</a>
                    <button className="navbar-toggler bg-secondary" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item" >
                            <Link className="nav-link" id="lilink" to="/" >Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" id="lilink" to="/" >Categorias</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" id="lilink" to="/" >Conheça</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" id="lilink" to="/" >Sobre</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" id="lilink" to="/">Download</Link>
                            </li>
                           </ul>
                           <button className="btn" id="entrarbuton" type="button"><Link className="nav-link" to="/" id="navbutonlinkk">Entrar</Link></button>
                            <button className="btn" id="navbuton" type="button"><Link className="nav-link" to="/" id="navbutonlink">Cadastre-se</Link></button>
                        
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;

//colocar codigo a seguir para logo da imagem antes de Faz um bico
//<a class="navbar-brand"><img src="" alt="Logo" style="width:40px;"></img></a>

//colocar para fazer os links dentro da navbar
//precisa fazer o impor *nome* from './pagina
//<Link className="nav-link" to="/*nome*" >Contato</Link>