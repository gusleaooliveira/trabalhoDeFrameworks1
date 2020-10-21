const Usuarios =  require('../model/Usuario');
const Tipos = require('../model/Tipos') 

exports.formCadastrar = (req, res, next) => {
    Tipos.find({}, (err, tipo) => {
        if(err) res.redirect(`/erro?erro=${erro}`);
        res.render('usuario/formCadastrar', {tipo})
    });
}
exports.formAlterar = (req, res, next) => {
    Usuarios.find({}, (err, usuario) => {
        if(err) res.redirect(`/erro?erro=${err}`);
        Tipos.find({}, (err, tipo) => {
            if(err) res.redirect(`/erro?erro=${err}`);
            res.render('usuario/formAlterar', {usuario, tipo});
        });
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

exports.listarPorId = (req, res, next) => {
    Usuarios.findById({_id: req.params.id}, (err, usuario) => {
        if(err) res.redirect(`/erro?erro=${err}`);
        res.send({usuario});
    });
}
exports.listar = (req, res, next) => {
    Usuarios.find({}, (err, usuario) => {
        if(err) res.redirect(`/erro?erro=${err}`);
        res.send({usuario});
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






