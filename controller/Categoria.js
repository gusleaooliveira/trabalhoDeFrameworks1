const Categorias = require('../model/Categorias');

exports.listar = () => {
    Categorias.find({}, (error, categorias) => {
        if(error) return error;
        return categorias;
    });
}

exports.inserir = (categoria) => {
    let newCategoria =  new Categorias(categoria);
    newCategoria.save((error, categoria) => {
        if(error) return error;
        return categoria;
    });
}

exports.atualizar = (id, categoria) => {
    Categorias.findByIdAndUpdate({_id: id}, categoria, {new : true}, (error, tipo) => {
        if(error) return error;
        return categoria;
    });
}

exports.apagar = (id) => {
    Categorias.findByIdAndDelete({_id: id}, (error, categoria) => {
        if(error) return error;
        return categoria;
    });
}

exports.buscarPorId = (id) => {
    Categorias.findById({_id: id}, (error, categoria) => {
        if(error) return error;
        return categoria;
    })
}

exports.procurar = (query) => {
    if(query && query.categoria){
        Categorias.find({ categoria: query.categoria }, (error, categoria) => {
            if(error) return error;
            return categoria;
        })
    }
}