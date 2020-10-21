function bloquear(){  return false;  }
function testarSenha() {
    let senha = document.querySelector("#senha").value;
    let senhaRepetida = document.querySelector('#senhaRepetida').value;
    let msg = document.querySelector("#msg");

    if(senha == senhaRepetida){
        console.log('senhas iguais');
        msg.classList.add('display-none');
    }
    else {
        console.log('senhas diferentes');
        msg.classList.remove('display-none');
    }

}
function getByID(id){ return document.querySelector(id).value; }
function inserirPorId(id, valor){
    document.querySelector(id).value = valor;
}
function verificar(msg){ return confirm(msg); }



function executar(metodo, cabecalho, url, json){
    console.warn('método: ', metodo);
    console.warn('cabecalho: ', cabecalho);
    console.warn('url: ', url);
    console.warn('json: ', json);

    if(verificar('Deseja continuar?')){
        fetch(url, { method: metodo, headers: cabecalho, body: json })
            .then((res) => { alert('Salvo com sucesso!'); window.location.reload(false); })
            .catch((err) => { alert('Ocorreu um erro! '); window.location.reload(false); });
    }
    else{
        alert('Você cancelou o salvamento!');
    }
}
function executarOutro(url, metodo){
    console.warn('método: ', metodo);
    console.warn('url: ', url);
    
    if(verificar('Deseja continuar?')){
        fetch(url, { method: metodo })
            .then((res) => { alert('Apagado com sucesso!'); window.location.reload(false); })
            .catch((err) => { alert('Ocorreu um erro!   '); window.location.reload(false); });
    }  
    else{
        alert('Você cancelou o salvamento!');
    }  
}

function carregar(local, metodo){
    let url = `/${local}/${getByID('#id')}`;
    
    fetch(url, {method: metodo, mode: 'cors', cache: 'default'})
        .then((resp) => { 
            resp.text().then((respo) => { 
                if(local == 'pacote'){
                    let resposta = JSON.parse(respo)['pacote'];
                    
                    inserirPorId('#nome', resposta.nome);
                    inserirPorId('#versao', resposta.versao);
                    inserirPorId('#descricao', resposta.descricao);
                    inserirPorId('#comandoInstalar', resposta.comandoInstalar);
                    inserirPorId('#comandoAtualizar', resposta.comandoAtualizar);
                    inserirPorId('#comandoApagar', resposta.comandoApagar);   
                }
                else if(local == 'usuario'){
                    let resposta = JSON.parse(respo)['usuario'];

                    inserirPorId('#nome', resposta.nome);
                    inserirPorId('#sobrenome', resposta.sobrenome);
                    inserirPorId('#email', resposta.email);
                    inserirPorId('#senha', resposta.senha);
                    inserirPorId('#senhaRepetida', resposta.senha);  
                }
            })
        })
        .catch(err => console.warn(err));

}

function enviar(metodo, formulario){ 
    let met = metodo.toLowerCase();
    let json =  null;
    let url = null;
    let cabecalho = { 'Content-Type': 'application/json' };

    if(met == 'post' || met == 'put'){
        if(formulario == 'tipo'){ 
            json = JSON.stringify({'tipo': getByID('#tipo')});  
        }
        else if(formulario == 'usuario'){    
            json = JSON.stringify({
                'nome': getByID('#nome'),
                'sobrenome': getByID('#sobrenome'),
                'email': getByID('#email'),
                'senha': getByID('#senha'),
                'tipo': getByID('#tipo')
            });
        }
        else if(formulario == 'categoria'){
            json = JSON.stringify({'categoria': getByID('#categoria') });
        }
        else if(formulario == 'pacote'){
            json = JSON.stringify({
                'nome': getByID('#nome'),
                'versao': getByID('#versao'),
                'descricao': getByID('#descricao'),
                'comandoInstalar': getByID('#comandoInstalar'),
                'comandoAtualizar': getByID('#comandoAtualizar'),
                'comandoApagar': getByID('#comandoApagar'),
                'categorias': [ getByID('#categoria') ]
            });
        }

        if(met == 'post') { url = `/${formulario}/`; }
        else if(met == 'put') { url = `/${formulario}/${getByID('#id')}`; }

        executar(metodo, cabecalho, url, json);
    }
    else if(met == 'delete'){
        url = `/${formulario}/${getByID('#id')}`;
        
        executarOutro(url, metodo);
    }
}

