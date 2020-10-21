const Router = require('express');
const router = Router();

router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/erro', (req, res, next) => {
    if(req.query)res.status(500).render('erro', { erro: req.query.erro});
    else res.status(500).render('erro', { erro: 'ocorreu um erro'});
});

router.get('*', (req, res, next) => {
    res.status(404).render('404')
});

module.exports = router;