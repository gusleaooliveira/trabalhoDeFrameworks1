const Categorias =  require('../model/Categorias');

exports.formCadastrar = (req, res, next) => {
    res.render('categoria/formCadastrar')
}
exports.formAlterar = (req, res, next) => {
    Categorias.find({}, (err, categoria) => {
        if(err) res.redirect(`/erro?erro=${erro}`);
        res.render('categoria/formAlterar', {categoria});
    });
}
exports.formApagar = (req, res, next) => {
    Categorias.find({}, (err, categoria) => {
        if(err) res.redirect(`/erro?erro=${erro}`);
        res.render('categoria/formApagar', {categoria});
    });
}

exports.formListar = (req, res, next) => {
    Categorias.find({}, (err, categoria) => {
        if(err) res.redirect(`/erro?erro=${erro}`);
        res.render('categoria/formListar', {categoria});
    });
}


exports.inserir = (req, res, next) => {
    let newCategoria = new Categorias(req.body);
    newCategoria.save((err, categoria) => {
        if(err) res.redirect(`/erro?erro=${erro}`);
        res.send({categoria});
    });
}

exports.alterar = (req, res, next) => {
    Categorias.findOneAndUpdate({_id: req.params.id}, req.body, {new : true}, (err, categoria) => {
        if(err) res.send(err);
        res.send(categoria);
    });
}

exports.apagar = (req, res, next) => {
    Categorias.findOneAndDelete({_id: req.params.id}, (error, categoria) =>{
        if(error) res.send(error);
        res.send(categoria);
    });
}


