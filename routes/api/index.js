const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');

// add prefix
router.use('/pizzas', pizzaRoutes);

module.exports = router;
