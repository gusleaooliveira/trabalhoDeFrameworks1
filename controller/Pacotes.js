const Pacotes =  require('../model/Pacotes');

exports.formCadastrar = (req, res, next) => {
    res.render('pacote/formCadastrar')
}
exports.formAlterar = (req, res, next) => {
    Pacotes.find({}, (err, pacote) => {
        if(err) res.redirect(`/erro?erro=${erro}`);
        res.render('pacote/formAlterar', {pacote});
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






