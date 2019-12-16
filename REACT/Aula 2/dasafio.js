
class App extends React.Component {
    render() {
        return (
            <div>
                <CursoHeader texto="Desenvolvedor Full-stack" />
                <CursoConteudo te="Objetivo" cont="Aprender a tecnologias incríveis para construir coisas magníficas" />
                <CursoConteudo te="Tecnologias aprendidas" cont="Javascript, Typescript, ReactJS, Angular entre outras" />

            </div>
        )
    }
}

class CursoHeader extends React.Component {
    render() {
        return (
            <h1>{this.props.texto}</h1>
        )
    }

}

class CursoConteudo extends React.Component {
    render() {
        return (
            <p><b>{this.props.te}</b>:{this.props.cont}</p>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('c'));


