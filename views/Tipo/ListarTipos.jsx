let React = require('react');

function ListarTipos(props){

    return  <form method="GET" action="/tipo/search">
                <p>Tipos de usuários: </p>
                <select name="id" id="id">
                    {props.tipos.map(item => {
                        return <option value={item.id}>{item.tipo}</option>
                    })}
                </select>
                <input type="submit" value="Enviar" />
            </form>
}

module.exports = ListarTipos;