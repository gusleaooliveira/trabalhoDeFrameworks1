const Tipos =  require('../model/Tipos');

exports.listar = (res) => {
    Tipos.find({}, (error, tipos) => {
        if(error) res.render('Tipo/ErroTipo', {error});
        res.render('Tipo/ListarTipos', {tipos});
    });
}

exports.inserir = (res, tipo) => {
    let newTipo = new Tipos(tipo);
    newTipo.save((err, tipo) => {
        if(err) res.render('Tipo/ErroTipo', {error});
        res.render('Tipo/InserirTipo', {tipo});
    });
}

exports.atualizar = (id, tipo) => {
    Tipos.findOneAndUpdate({_id: id}, tipo, {new : true}, (error, tipo) => {
        if(error) return error;
        return tipo;
    });
}

exports.apagar = (id) => {
    Tipos.findOneAndDelete({_id: id}, (error, tipo) =>{
        if(error) return error;
        return tipo;
    });
}

exports.buscarPorId = (id) => {
    Tipos.findById({_id: id}, (error, tipo) => {
        if(error) res.render('Tipo/ErroTipo', {error});
        res.render('Tipo/ListarTipoPorID', {tipo});
    });
}

exports.procurar  = (res, query) => {
    if(query && query.id){
        let paramTipo = query.tipo;
        Tipos.find({ tipo: paramTipo }, (error, tipo) => {
            if(error) res.render('Tipo/ErroTipo', {error});
            res.render('Tipo/PesquisarTipo', {tipo});
        })
    }
    
}