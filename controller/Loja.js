const Pacotes =  require('../model/Pacotes');
const Categorias = require('../model/Categorias');
const { populate } = require('../model/Categorias');

exports.formLoja = (req, res, next) => {
    Pacotes.find({  })
        .populate('categorias').exec(
        (erro, pacote) =>{
            if(erro) res.redirect(`/erro?erro=${erro}`);
            res.render('loja/formLoja', {pacote});
        }
    )
}

exports.formPacote = (req, res, next) => {
    Pacotes.find({ _id: req.params.id})
        .populate('categorias').exec(
            (erro, pacote) => {
                if(erro) res.redirect(`/erro?erro=${erro}`);
                res.render('loja/formPacote', {pacote});
            }
        )
}

exports.formCategoria = (req, res, next) => {
    Pacotes.find({ categorias: req.params.id })
        .exec(
            (erro, pacote) => {
                if(erro) res.redirect(`/erro?erro=${erro}`);
                res.render('loja/formCategoria', {pacote});
            }
        )

}