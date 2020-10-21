const { Router } = require('express');
const router = Router();
const controller =  require('../controller/Pacotes');

router.get('/cadastrar', controller.formCadastrar);
router.get('/listar', controller.formListar);
router.get('/alterar', controller.formAlterar);
router.get('/apagar', controller.formApagar);

router.post('/', controller.inserir);
router.put('/:id', controller.alterar);
router.delete('/:id', controller.apagar);

module.exports = router;