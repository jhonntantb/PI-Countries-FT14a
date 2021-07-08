const { Router } = require('express');
// Importar todos los routers;
const countries=require('./countries')
const activity=require('./activity')
const router = Router();

// Configurar los routers
router.use('/countries',countries);
router.use('/activity',activity);

module.exports = router;
