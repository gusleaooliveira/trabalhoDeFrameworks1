const { Router } = require('express'); 
const router = Router();

const controller  = require('../controller/Usuario');

router.get('/', (req, res, next) => {
    let usuarios = controller.listar();
    res.render('ListarUsuarios', {usuarios: usuarios});
});
router.get('/search', (req, res, next) => {
    let usuario = controller.buscar(req.query);
    res.render('PesquisarUsuario', {usuario: usuario});
});
router.get('/:id', (req, res, next) => {
    let usuario = controller.buscarPorId(req.params.id);
    res.render('ListarUsuarioPorID', {usuario: usuario});
});
router.put('/:id', (req, res, next) => {
    let usuario = controller.atualizar(req.params.id, req.body);
    res.render('AlterarUsuario', {usuario: usuario});
});
router.delete('/:id', (req, res, next) => { 
    let usuario = controller.apagar(req.params.id);
    res.render('ApagarUsuario', {usuario: usuario});
});
router.post('/', (req, res, next) => {
    let usuario = controller.inserir(req.body);
    res.render('InserirUsuario', {usuario:usuario})
});

module.exports = router;