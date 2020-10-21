const Pacotes =  require('../model/Pacotes');
const Categorias = require('../model/Categorias');

exports.formLoja = (req, res, next) => {
    Pacotes.find().populate('categorias').exec(
        (err, pacote) =>{
            if(err) res.redirect(`/erro?erro=${erro}`);
            res.render('loja/formLoja', {pacote});            
        }
    )
}