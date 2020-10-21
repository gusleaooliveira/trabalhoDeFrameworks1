let mongoose = require('mongoose');
let Schema =  mongoose.Schema;
const Categorias = require('./Categorias');

mongoose.Promise = global.Promise;

const PacotesSchema = new Schema({
    nome: String,
    versao: String,
    descricao: String, 
    comandoInstalar: String,
    comandoAtualizar: String,
    comandoApagar: String,
    categorias: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Categorias'}
    ]
}, {
    versionKey: false
});

module.exports = mongoose.model('Pacotes', PacotesSchema);