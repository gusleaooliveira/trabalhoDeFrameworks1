let React = require('react');

function PesquisarTipo(props){
    return  <div>
                <p>Tipo do usuário:</p>
                <p>O tipo escolhido foi: <b>{props.tipo.tipo}</b>.</p>
            </div>;
}

module.exports = PesquisarTipo;