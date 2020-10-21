const Pacotes =  require('../model/Pacotes');

exports.formCadastrar = (req, res, next) => {
    res.render('pacote/formCadastrar')
}
exports.formAlterar = (req, res, next) => {
    Pacotes.find({}, (err, pacotes) => {
        if(err) res.redirect(`/erro?erro=${erro}`);
        res.render('pacote/formAlterar', {pacotes});
    });
}
exports.formApagar = (req, res, next) => {
    Pacotes.find({}, (err, pacotes) => {
        if(err) res.redirect(`/erro?erro=${erro}`);
        res.render('pacote/formApagar', {pacotes});
    });
}

exports.formListar = (req, res, next) => {
    Pacotes.find({}, (err, pacotes) => {
        if(err) res.redirect(`/erro?erro=${erro}`);
        res.render('pacote/formListar', {pacotes});
    });
}


exports.inserir = (req, res, next) => {
    let newPacotes = new Pacotes(req.body);
    newPacotes.save((err, pacotes) => {
        if(err) res.redirect(`/erro?erro=${erro}`);
        res.send({pacotes});
    });
}

exports.alterar = (req, res, next) => {
    Pacotes.findOneAndUpdate({_id: req.params.id}, req.body, {new : true}, (err, pacotes) => {
        if(err) res.send(err);
        res.send(pacotes);
    });
}

exports.apagar = (req, res, next) => {
    Pacotes.findOneAndDelete({_id: req.params.id}, (error, pacotes) =>{
        if(error) res.send(error);
        res.send(pacotes);
    });
}


