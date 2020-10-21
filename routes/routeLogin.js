const { Router } = require('express');
const router = Router();
const controller =  require('../controller/Login');


router.get('/login', controller.formLogin);
router.get('/logout', controller.logout);

router.post('/', controller.login)


module.exports = router;