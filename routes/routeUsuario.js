const { Router } = require('express');
const router = Router();
const controller =  require('../controller/Usuario');

router.get('/cadastrar', controller.formCadastrar);
router.get('/listar', controller.formListar);
router.get('/alterar', controller.formAlterar);
router.get('/apagar', controller.formApagar);

router.get('/:id', controller.listarPorId);
router.get('/', controller.listar);
router.post('/', controller.inserir);
router.put('/:id', controller.alterar);
router.delete('/:id', controller.apagar);
 
module.exports = router;