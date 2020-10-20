function bloquear(){  return false;  }
function getByID(id){ return document.querySelector(id).value; }
function verificar(msg){ return confirm(msg); }
function testarSenha() {
    let senha = document.querySelector("#senha").value;
    let senhaRepetida = document.querySelector('#senhaRepetida').value;

    if(senha == senhaRepetida){
        alert('Senhas iguais');
    }
    else {
        alert('Redigite a senha! \nSenhas diferentes!')
    }

    enviar('post');
}


function enviar(metodo){ 
    let met = metodo.toLowerCase();
    let json =  null;
    let url = null;
    let cabecalho = { 'Content-Type': 'application/json' };

    if(met == 'post' || met == 'put'){
        if(document.querySelector('#tipoCadastrar') != null){
            if(met == 'post') url = `/tipo/`;
            else url = `/tipo/${getByID('#id')}`;

            json = JSON.stringify({'tipo': getByID('#tipo') });
        }
        else if(document.querySelector('#usuarioCadastrar') != null){
            if(met == 'post') url = `/usuario/`;
            else url = `/usuario/${getByID('#id')}`;

            json = JSON.stringify({
                'nome': getByID('#nome'),
                'sobrenome': getByID('#sobrenome'),
                'email': getByID('#email'),
                'senha': getByID('#senha'),
                'tipo': getByID('#tipo')
            });
        }
        else if(document.querySelector('#categoriaCadastrar') != null){
            if(met == 'post') url = `/categoria/`;
            else url = `/categoria/${getByID('#id')}`;

            json = JSON.stringify({'categoria': getByID('#categoria') });
        }
        else if(document.querySelector('#pacoteCadastrar') != null){
            if(met == 'post') url = `/pacote/`;
            else url = `/pacote/${getByID('#id')}`;

            json = JSON.stringify({
                'nome': getByID('#nome'),
                'versao': getByID('#versao'),
                'descricao': getByID('#descricao'),
                'comandoInstalar': getByID('#comandoInstalar'),
                'comandoAtualizar': getByID('#comandoAtualizar'),
                'comandoApagar': getByID('#comandoApagar'),
                'categorias': getByID('#categoria')
            });
        }
        
        if(verificar('Deseja continuar?')){
            fetch(url, { method: metodo, headers: cabecalho, body: json })
                .then((res) => { alert('Salvo com sucesso!'); window.location.reload(false); })
                .catch((err) => { alert('Ocorreu um erro! '); window.location.reload(false); });
        }
        else{
            alert('Você cancelou o salvamento!');
        }
    }
    else if(met == 'delete'){
        if(document.querySelector('#tipoApagar') != null) url = `/tipo/${getByID('#id')}`;
        else if(document.querySelector('#usuarioApagar') != null) url = `/usuario/${getByID('#id')}`
        else if(document.querySelector('#categoriaApagar') != null) url = `/categoria/${getByID('#id')}`
        else if(document.querySelector('#pacoteApagar') != null) url = `/pacote/${getByID('#id')}`
        
        if(verificar('Deseja continuar?')){
            fetch(url, { method: metodo })
                .then((res) => { alert('Apagado com sucesso!'); window.location.reload(false); })
                .catch((err) => { alert('Ocorreu um erro!   '); window.location.reload(false); });
        }       
    }
}

