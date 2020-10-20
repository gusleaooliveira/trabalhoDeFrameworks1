const { Router } = require('express'); 
const router = Router();

const controller  = require('../controller/Usuario');

router.get('/cadastrar', controller.formCadastrar);

router.post('/', controller.inserir)


module.exports = router;