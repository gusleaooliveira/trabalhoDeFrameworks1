require('dotenv-safe').config();

const { json, urlencoded } = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


let app = express();
let rotaView = require('./routes/routeView');
// let rotaLogin = require('./routes/routeLogin');
let rotaTipoDeUsuario = require('./routes/routeTipo');
// let rotaUsuario = require('./routes/routeUsuario');
// let rotaCategoria = require('./routes/routeCategoria');
// let rotaPacote = require('./routes/routePacote');

mongoose.connect(`mongodb+srv://${process.env.USUARIO}:${process.env.SENHA}@cluster0.sl4fb.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("##########################");
    console.log("# BD Conectado! ");
    console.log("#########################");    
}).catch((error) => {
    console.error("#############################################");
    console.error("# Ocorreu um erro ao conectar ");
    console.error(`# ${error}`);
    console.error("#############################################");
});

mongoose.Promise = global.Promise;


app.set('view engine', 'pug');

app.use(json());
app.use(urlencoded());
app.use((req, res, next) => {
    let data = new Date();
    console.warn("###################################################");
    console.warn(`# Hora da requisição: ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()} - ${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`);
    console.warn(`# (Método) Url: ${req.method} ${req.url}`);
    console.warn(`# Body: ${Object.values(req.body)}`);
    console.warn("###################################################");
    next();
});
app.use(cors({
    origin: `http://localhost:${process.env.PORT}/`,
    credentials: true
}));
app.use('/static', express.static(__dirname+'/public'));
app.use('/tipo/', rotaTipoDeUsuario);
app.use('/', rotaView);

app.listen(process.env.PORT, () => {
    console.log(`Local: http://localhost:${process.env.PORT}/`);
});