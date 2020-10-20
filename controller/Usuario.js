const Usuarios = require('../model/Usuario');
const Tipos = require('../model/Tipos');
const bcrypt = require('bcrypt');
const salto = bcrypt.genSalt(13);

exports.formCadastrar = (req, res, next) => {
    Tipos.find({}, (erro, tipos) => {
        if(erro)  res.redirect(`/erro?erro=${erro}`);
        res.render('usuario/formCadastrar', {tipos});
    })
        
}

exports.inserir = (req, res, next) => {
    let usuario = req.body;
    let senha = req.body.senha;
    if(req.body.senha){
        bcrypt.genSalt(salto, function(err, salt) {
            bcrypt.hash(senha, salt, function(err, hash) {
                usuario['senha'] = hash;
            });
        });
    }
    let newUsuario = new Usuarios(usuario);
    newUsuario.save((err, usuario) => {
        if(err){
            res.status(400).send(err);
        }
        res.status(201).send(usuario);
    })
}


exports.buscar = (query) => {
    if(query && query.tipo) {
        Usuarios.find({ tipo: query.tipo }, (error, usuario) => {
            if(error) return error;
            return usuario;
        });
    
    if(query && query.email && query.senha){
        let paramEmail = query.email;
        let paramSenha = query.senha;
        Usuarios.find({ email: paramEmail }, (error, usuario) => {
            if(error) return error;
            let senha = usuario[0]['senha'];
            bcrypt.compare(paramSenha, senha, (error, verifica) => {
                if(!verifica) return verifica;
                else{
                    Usuarios.find({
                        email: paramEmail, 
                        senha: senha
                    }, (error, usuario) =>{
                        if(error) return error;
                        return usuario;
                    });
                }
            })
        });
    }

}}
