const Usuarios =  require('../model/Usuario');

exports.formCadastrar = (req, res, next) => {
    res.render('usuario/formCadastrar')
}
exports.formAlterar = (req, res, next) => {
    Usuarios.find({}, (err, usuarios) => {
        if(err) res.redirect(`/erro?erro=${erro}`);
        res.render('usuario/formAlterar', {usuarios});
    });
}
exports.formApagar = (req, res, next) => {
    Usuarios.find({}, (err, usuarios) => {
        if(err) res.redirect(`/erro?erro=${erro}`);
        res.render('usuario/formApagar', {usuarios});
    });
}

exports.formListar = (req, res, next) => {
    Usuarios.find({}, (err, usuarios) => {
        if(err) res.redirect(`/erro?erro=${erro}`);
        res.render('usuario/formListar', {usuarios});
    });
}


exports.inserir = (req, res, next) => {
    let newUsuarios = new usuarios(req.body);
    newUsuarios.save((err, usuarios) => {
        if(err) res.redirect(`/erro?erro=${erro}`);
        res.send({usuarios});
    });
}

exports.alterar = (req, res, next) => {
    Usuarios.findOneAndUpdate({_id: req.params.id}, req.body, {new : true}, (err, usuarios) => {
        if(err) res.send(err);
        res.send(usuarios);
    });
}

exports.apagar = (req, res, next) => {
    Usuarios.findOneAndDelete({_id: req.params.id}, (error, usuarios) =>{
        if(error) res.send(error);
        res.send(usuarios);
    });
}


