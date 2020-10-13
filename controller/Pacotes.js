const Pacotes =  require('../model/Pacotes');

exports.listar = () => {
    Pacotes.find({}, (error, pacotes) => {
        if(error) return error;
        return pacotes;
    });
}

exports.inserir = (pacote) => {
    let newPacote =  new Pacotes(pacote);
    newPacote.save((error, pacote) => {
        if(error) return error;
        return pacote;
    });
}

exports.atualizar = (id, pacote) => {
    Pacotes.findByIdAndUpdate({_id: id}, pacote, {new: true}, (error, pacote) => {
        if(error) return error;
        return pacote;
    });
}


exports.apagar = (id) => {
    Pacotes.findByIdAndDelete({_id: id}, (error, pacote) => {
        if(error) return error;
        return pacote;
    });
}

exports.buscarPorId = (id) => {
    Pacotes.findById({ _id: id}, (error, pacote) => {
        if(error) return error;
        return pacote;
    });
}

exports.procurar = (query) => {
    if(query && query.nome){
        let paramNome = query.nome;
        Pacotes.find({nome: paramNome}, (error, pacote) => {
            if(error) return error;
            return pacote;
        });
    }
    if(query && query.categoriaId){
        let paramCategoriaId = query.categoriaId;
        Pacotes.find({categoria: paramCategoriaId}, (error, pacotes) => {
            if(error) return error;
            return pacotes;
        });
    }
}