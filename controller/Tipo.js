const Tipos =  require('../model/Tipos');

exports.formCadastrar = (req, res, next) => {
    res.render('tipo/formCadastrar')
}
exports.formAlterar = (req, res, next) => {
    Tipos.find({}, (err, tipo) => {
        if(err) res.redirect(`/erro?erro=${erro}`);
        res.render('tipo/formAlterar', {tipo});
    });
}
exports.formApagar = (req, res, next) => {
    Tipos.find({}, (err, tipo) => {
        if(err) res.redirect(`/erro?erro=${erro}`);
        res.render('tipo/formApagar', {tipo});
    });
}

exports.formListar = (req, res, next) => {
    Tipos.find({}, (err, tipo) => {
        if(err) res.redirect(`/erro?erro=${erro}`);
        res.render('tipo/formListar', {tipo});
    });
}


exports.inserir = (req, res, next) => {
    let newTipo = new Tipos(req.body);
    newTipo.save((err, tipo) => {
        if(err) res.redirect(`/erro?erro=${erro}`);
        res.render('tipo/components/PosCadastro', {tipo});
    });
}

exports.alterar = (req, res, next) => {
    Tipos.findOneAndUpdate({_id: req.params.id}, req.body, {new : true}, (err, tipo) => {
        if(err) res.send(err);
        res.send(tipo);
    });
}

exports.apagar = (req, res, next) => {
    Tipos.findOneAndDelete({_id: req.params.id}, (error, tipo) =>{
        if(error) res.send(error);
        res.send(tipo);
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