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
router.post('/findOneWorkingDay', employesController.findOneWorkingDay);
router.post('/findOneWorkingDayAll', employesController.findOneWorkingDayAll);
router.post('/findOneWorkingDayOne', employesController.findOneWorkingDayOne);
router.post('/create', employesController.create);
router.post('/findAllUser', employesController.findAllUser);





module.exports = router;



