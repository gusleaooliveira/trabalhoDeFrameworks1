const Pacotes =  require('../model/Pacotes');
const Categorias = require('../model/Categorias');

exports.formCadastrar = (req, res, next) => {
    Categorias.find({}, (erro, categoria) => {
        if(erro) res.redirect(`/erro?erro=${erro}`)
        res.render('pacote/formCadastrar', {categoria})
    });
}
exports.formAlterar = (req, res, next) => {
    Pacotes.find({}, (err, pacote) => {
        if(err) res.redirect(`/erro?erro=${erro}`);
        Categorias.find({}, (erro, categoria) => {
            if(erro)re.redirect(`/error?erro${erro}`);
            res.render('pacote/formAlterar', {pacote, categoria});
        });
    });
}
exports.formApagar = (req, res, next) => {
    Pacotes.find({}, (err, pacote) => {
        if(err) res.redirect(`/erro?erro=${erro}`);
        res.render('pacote/formApagar', {pacote});
    });
}

exports.formListar = (req, res, next) => {
    Pacotes.find({}, (err, pacote) => {
        if(err) res.redirect(`/erro?erro=${erro}`);
        res.render('pacote/formListar', {pacote});
    });
}

exports.listarPorId = (req, res, next) => {
    Pacotes.findById({_id: req.params.id}, (err, pacote) => {
        if(err) res.redirect(`/erro?erro=${err}`);
        res.send({pacote});
    });
}
exports.listar = (req, res, next) => {
    Pacotes.find({}, (err, pacote) => {
        if(err) res.redirect(`/erro?erro=${err}`);
        res.send({pacote});
    });
}

exports.inserir = (req, res, next) => {
    let newPacotes = new Pacotes(req.body);
    newPacotes.save((err, pacote) => {
        if(err) res.redirect(`/erro?erro=${erro}`);
        res.render('sucesso', {sucesso: pacote});
    });
}

exports.alterar = (req, res, next) => {
    Pacotes.findOneAndUpdate({_id: req.params.id}, req.body, {new : true}, (err, pacote) => {
        if(err) res.redirect(`/erro?erro=${erro}`);
        res.render('sucesso', {sucesso: pacote});
    });
}

exports.apagar = (req, res, next) => {
    Pacotes.findOneAndDelete({_id: req.params.id}, (error, pacote) =>{
        if(error) res.redirect(`/erro?erro=${erro}`);
        res.render('sucesso', {sucesso: pacote});
    });
}






