const jwt = require('jsonwebtoken');
const Usuarios = require('../model/Usuario');
const cookie = require('cookie-parser')

exports.formLogin = (req, res, next) => {
    if(!req.cookies){
        Object.entries(req.cookies).forEach((values, index) => {
            console.log(`   ${index}:${values}`);
        })
        res.render('login/login');                
    }
    else{
        Object.entries(req.cookies).forEach((values, index) => {
            console.log(`   ${index}:${values}`);
        })
        console.log(req.originalUrl);
        if(req.originalUrl == '/usuario/cadastrar'){ res.render('./usuario/formCadastrar'); }
        if(req.originalUrl == '/usuario/listar'){ res.render('./usuario/formListar'); }
        if(req.originalUrl == '/usuario/alterar'){ res.render('./usuario/formAlterar'); }
        if(req.originalUrl == '/usuario/apagar'){ res.render('./usuario/formApagar'); }
    }
}


exports.login = (req, res, next) => {
    if(!req.cookie ){
        Usuarios.find({ email: req.body.email, senha: req.body.senha }, (erro, usuario) => {
            if(erro) res.redirect(`/erro?erro=${erro}`);
            let token = jwt.sign({usuario}, process.env.SECRET, {expiresIn: 300});
            res.cookie('token', token).send({jwt: token});
        });
    }
}

exports.logout = (req, res, next) => {
    if(req.cookies ){
        res.clearCookie('token').send({msg: "OK"});
        
    }
}
