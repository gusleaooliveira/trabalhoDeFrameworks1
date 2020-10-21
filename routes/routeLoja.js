const { Router } = require('express');
const router = Router();
const controller =  require('../controller/Loja');

router.get('/', controller.formLoja);
router.get('/pacote/:id', controller.formPacote);
router.get('/categoria/:id', controller.formCategoria);
 
module.exports = router;