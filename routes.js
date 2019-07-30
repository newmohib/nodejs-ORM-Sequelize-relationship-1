var express = require('express');
var cors = require('cors');
// var Sequelize = require('sequelize');
// var models = require("./models");
 
var router = express.Router();
router.use(cors())
//var helloMiddlewares = require('./helpers/middlewares');
var employesController = require('./controllers/employesController');
//


//router
router.post('/findOneUser', employesController.findOneUser);
router.post('/findOneCompany', employesController.findOneCompany);





module.exports = router;



