const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
const Usuarios = require('../model/Usuario');
const Tipos = require('../model/Tipos');

exports.formLogin = (req, res, next) => {
        res.render('login/login')
}


exports.verificaJwt = (req, res, next) => {
    let token = null;
    if(req.cookies.token){token = req.cookie.token;}
    else if(req.signedCookies.token){ token = req.signedCookies.token; }
    else { 
        if(req.headers["x-access-token"]){ token = req.headers['x-access-token'];}
        else { res.redirect(`/erro?erro='Nenhum token fornecido!'`); }
    }
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if(err)return res.redirect(`/erro?erro='Falha ao autenticar o token!'`)
        
        req.userId = decoded.id;
        next()
    })
}

exports.login = (req, res, next) => {
    console.log(req.cookies.token == undefined || req.signedCookies.token == undefined);
    if(req.cookies.token == undefined || req.signedCookies.token == undefined){
        let email = req.body.email;
        let senha = req.body.senha;


        Usuarios.find({
            email: email,
            senha: senha
        }, (err, usuario) => {
            if(err){res.redirect(`/erro?erro=${err}`);}

            let token = jwt.sign({usuario}, process.env.SECRET, {expiresIn: 300});
            res.cookie('token', token, {signed: true}).render('index');
        })
    }
}

exports.logout = (req, res, next) => {
    if(req.cookies || req.signedCookies){
        res.clearCookies('token').render('index');
    }
}
