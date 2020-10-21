const Usuarios =  require('../model/Usuario');

exports.formCadastrar = (req, res, next) => {
    res.render('usuario/formCadastrar')
}
exports.formAlterar = (req, res, next) => {
    Usuarios.find({}, (err, usuario) => {
        if(err) res.redirect(`/erro?erro=${erro}`);
        res.render('usuario/formAlterar', {usuario});
    });
}
exports.formApagar = (req, res, next) => {
    Usuarios.find({}, (err, usuario) => {
        if(err) res.redirect(`/erro?erro=${erro}`);
        res.render('usuario/formApagar', {usuario});
    });
}

exports.formListar = (req, res, next) => {
    Usuarios.find({}, (err, usuario) => {
        if(err) res.redirect(`/erro?erro=${erro}`);
        res.render('usuario/formListar', {usuario});
    });
}


exports.inserir = (req, res, next) => {
    let newUsuario = new Usuarios(req.body);
    newUsuario.save((err, usuario) => {
        if(err) res.redirect(`/erro?erro=${erro}`);
        res.render('sucesso', {sucesso: usuario});
    });
}

exports.alterar = (req, res, next) => {
    Usuarios.findOneAndUpdate({_id: req.params.id}, req.body, {new : true}, (err, usuario) => {
        if(err) res.redirect(`/erro?erro=${erro}`);
        res.render('sucesso', {sucesso: usuario});
    });
}

exports.apagar = (req, res, next) => {
    Usuarios.findOneAndDelete({_id: req.params.id}, (error, usuario) =>{
        if(error) res.redirect(`/erro?erro=${erro}`);
        res.render('sucesso', {sucesso: usuario});
    });
}






