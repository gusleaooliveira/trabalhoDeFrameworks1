function bloquear(){  return false;  }
function enviar(metodo){ 

    if(metodo.toLowerCase() == 'put' || metodo.toLowerCase() == 'post'){
        fetch(`/tipo/${document.querySelector("#id").value}`, {
            method: metodo,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'tipo': document.querySelector("#tipo").value
            })
        })
        .then((res) => { alert('Salvo com sucesso! '); window.location.reload(false); })
        .catch((err) => alert('Erro: ',err));
    }
    else if(metodo.toLowerCase() == 'delete'){
        fetch(`/tipo/${document.querySelector('#id').value}`, {
            method: metodo
        })
        .then((res) => {alert('Apagado com sucesso!'); window.location.reload(false);} )
        .catch((err) => alert('Erro: ',err));
    }
}

