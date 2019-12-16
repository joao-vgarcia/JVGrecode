import React, { Component } from 'react';
import './Main.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            escolha: 'USD',
            valor: '',
            resultado: '',
            moneyResult: '$'
        };
        this.handleChange = this.handleChange.bind(this);
        this.convert = this.convert.bind(this);
        this.limpar = this.limpar.bind(this);
        this.click = this.click.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    click() {
        if (this.state.escolha === 'USD') {
            this.setState({
                moneyResult: '$'
            });
        } else if (this.state.escolha === 'EUR') {
            this.setState({
                moneyResult: '€'
            });
        } else if (this.state.escolha === 'ARS') {
            this.setState({
                moneyResult: 'ARS'
            });
        } else if (this.state.escolha === 'JPY') {
            this.setState({
                moneyResult: '円'
            });
        }
    }

    convert() {
        let escolha = this.state.escolha;
        if (escolha === 'USD') {
            let total = 4.13 * this.state.valor;
            this.setState({
                resultado: total.toFixed(2),
            });
        } else if (escolha === 'EUR') {
            let total = 4.57 * this.state.valor;
            this.setState({
                resultado: total.toFixed(2),
            });
        } else if (escolha === 'ARS') {
            let total = 0.069 * this.state.valor;
            this.setState({
                resultado: total.toFixed(2),
            });
        } else if (escolha === 'JPY') {
            let total = 1.81 * this.state.valor;
            this.setState({
                resultado: total.toFixed(2),
            });
        }
    }

    limpar() {
        this.setState({
            valor: '',
            resultado: '',
            moneyResult: '$'
        });
    }

    render() {
        return ( <
            div className = 'container-fluid' >
            <
            div className = 'jumbotron' >
            <
            h1 className = 'display-4' > Conversor < /h1> <
            /div> <
            hr className = 'my-4' / >
            <
            form >
            <
            div className = 'row' >
            <
            div className = 'col-6' >
            <
            div className = 'form-group' >
            <
            select className = 'form-control'
            name = 'escolha'
            value = { this.state.escolha }
            onChange = { this.handleChange }
            onClick = { this.click } >
            <
            option value = 'USD' > Dólar $ < /option> <
            option value = 'EUR' > Euro€ < /option> <
            option value = 'ARS' > Peso Argentino ARS < /option> <
            option value = 'JPY' > Iene Japones 円 < /option> <
            /select> <
            /div> <
            /div> <
            div className = 'col-6' >
            <
            div className = 'form-group' >
            <
            div className = 'input-group mb-3' >
            <
            div className = 'input-group-prepend' >
            <
            span className = 'input-group-text'
            dangerouslySetInnerHTML = {
                {
                    __html: `${this.state.moneyResult}`
                }
            } >
            < /span> <
            /div> <
            input type = 'text'
            className = { `form-control` }
            name = 'valor'
            placeholder = 'Entre com um valor'
            value = { this.state.valor }
            onChange = { this.handleChange }
            /> <
            /div> <
            /div> <
            /div> <
            /div> <
            div className = 'row justify-content-center mt-5' >
            <
            div className = 'col-12' >
            <
            div className = 'form-group' >
            <
            div className = 'input-group mb-3' >
            <
            div className = 'input-group-prepend' >
            <
            span className = 'input-group-text' > R$ < /span> <
            /div> <
            input type = 'text'
            className = 'form-control'
            placeholder = 'Resultado'
            name = 'result'
            disabled value = { this.state.resultado }
            /> <
            /div> <
            /div> <
            /div> <
            div className = 'col-3' >
            <
            input type = 'button'
            className = 'btn btn-outline-success btn-block'
            onClick = { this.convert }
            value = { `Converter` }
            /> <
            /div> <
            div className = 'col-3' >
            <
            button type = 'reset'
            className = 'btn btn-outline-warning btn-block'
            onClick = { this.limpar } >
            Limpar <
            /button> <
            /div> <
            /div> <
            /form> <
            /div>
        );
    }
}

export default Home;