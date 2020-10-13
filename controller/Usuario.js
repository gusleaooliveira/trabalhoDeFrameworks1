const Usuarios = require('../model/Usuario');
const bcrypt = require('bcrypt');
const salto = bcrypt.genSalt(13);

exports.listar = () => {
    Usuarios.find({}, (error, usuarios) => {
        if(error)return error;
        return usuarios;
    })
}

exports.inserir = (usuario) => {
    if(usuario.senha){
        let senha = usuario.senha;
        bcrypt.genSalt(salto, (error, salt) => {
            bcrypt.hash(senha, salt, (error, hash) => {
                usuario['senha'] = hash;
            });
        });
    }
    let newUsuario = new Usuarios(usuario);
    newUsuario.save((error, usuario) => {
        if(error)return error;
        return usuario;
    });
}

exports.atualizar = (id, usuario) => {
    if(usuario.senha){
        let senha = usuario.senha;
        bcrypt.genSalt(salto, (error, salt) => {
            bcrypt.hash(senha, salt, (error, salt) => {
                usuario['senha'] = hash;
            });
        });
    }
    Usuarios.findOneAndUpdate({_id: id}, usuario, {new : true}, (error, usuario) => {
        if(error)return error;
        return usuario;
    });
}

exports.apagar = (id) => {
    Usuarios.findByIdAndDelete({_id: id}, (error, usuario) => {
        if(error) return error;
        return usuario; 
    });
}

exports.buscarPorId = (id) => {
    Usuarios.findById({_id: id}, (error, usuario) => {
        if(error)return error;
        return usuario;
    });
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
}
