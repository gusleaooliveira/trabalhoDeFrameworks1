let React =  require('react');

function CadastrarTipo(props){
    return  <form method="POST" action="/tipo/">
                <label htmlFor="tipo">Tipo de Usuário:</label>
                <input type="text" name="tipo" id="tipo" placeholder="Digite o tipo de usuário" />
                <input type="submit" value="Salvar" />
            </form>;
}

module.exports = CadastrarTipo;