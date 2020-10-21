const { Router } = require('express');
const router = Router();
const controller =  require('../controller/Usuario');
const controllerLogin = require('../controller/Login')

router.get('/cadastrar', controllerLogin.formLogin, controller.formCadastrar);
router.get('/listar',  controllerLogin.formLogin, controller.formListar);
router.get('/alterar',  controllerLogin.formLogin,  controller.formAlterar);
router.get('/apagar',  controllerLogin.formLogin, controller.formApagar);

router.get('/:id', controller.listarPorId);
router.get('/', controller.listar);
router.post('/', controller.inserir);
router.put('/:id', controller.alterar);
router.delete('/:id', controller.apagar);
 
module.exports = router;