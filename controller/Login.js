const jwt = require('jsonwebtoken');
const Usuarios = require('../model/Usuario');

exports.login = (query) => {
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
                        let token = jwt.sign({usuario}, process.env.SECRET, {expiresIn: 300});
                        return token;
                    });
                }
            });
        });
    }
}
