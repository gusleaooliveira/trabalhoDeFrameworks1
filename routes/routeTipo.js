const { Router } = require('express');
const router = Router();
const controller =  require('../controller/Tipo');

router.get('/cadastrar', (req, res, next) => {
    res.render('CadastrarTipo');
});

router.get('/', (req, res, next) => {
    controller.listar(res);
});
router.get('/search', (req, res, next) => {
    controller.procurar(res, req.query);
});
router.get('/:id', (req, res, next) => {
    controller.buscarPorId(res, req.params.id);
});
router.put('/:id', (req, res, next) => {
    let tipo = controller.atualizar(req.params.id, req.body);
    // res.render('AlterarTipo', {tipo:tipo});
});
router.delete('/:id', (req, res, next) => {
    let tipo = controller.apagar(req.params.id);
    // res.render('ApagarTipo', {tipo: tipo});
});
router.post('/', (req, res, next) => {
    controller.inserir(res, req.body);
});

module.exports = router;