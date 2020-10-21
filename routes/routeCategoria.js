const { Router } = require('express');
const router = Router();
const controller =  require('../controller/Categoria');
const controllerLogin = require('../controller/Login')

router.get('/cadastrar',  controllerLogin.verificaJwt,  controller.formCadastrar);
router.get('/listar', controller.formListar);
router.get('/alterar',  controllerLogin.verificaJwt,  controller.formAlterar);
router.get('/apagar',   controllerLogin.verificaJwt, controller.formApagar);

router.post('/',   controllerLogin.verificaJwt, controller.inserir);
router.put('/:id',   controllerLogin.verificaJwt, controller.alterar);
router.delete('/:id',   controllerLogin.verificaJwt, controller.apagar);

module.exports = router;