class MyBUtton extends React.Component {
    render() {
        return (
            <button>{this.props.name}</button>
        )
    }
}
class MyLabel extends React.Component {
    render() {
        return (
            <p>{this.props.texto}</p>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <MyLabel texto="Recode pro 2019" />
                <MyBUtton name="Botão 1" />
                <MyBUtton name="Botão 2" />
                <MyBUtton name="Botão 3" />
            </div>

        )
    }
}

ReactDOM.render(<App/>, document.getElementById("c"))