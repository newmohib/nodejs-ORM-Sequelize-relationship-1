const models = require('../models');
const User = models.User;
const Company = models.Company;
const WorkingDay = models.WorkingDay;
const UsersWorkingDay = models.UsersWorkingDay;






module.exports = {
    //http://localhost:4000/
    //one to one relation
    findOneUser(req, res) {
        User.findOne({
            where: { email: 'murad@gmial.com' }, include: 'company'
        })
            .then((findedUser) => {
                // Get the User with Company datas included
                //console.log("findedUser",findedUser)
                // Get the company record only
                //console.log("compa",findedUser.get().company)
                res.status(200).json(findedUser);
            })
            .catch((err) => {
                console.log("Error while find user : ", err);
                res.status(500).json(err);

            })
    },
    //one to many relationship
    findOneCompany(req, res) {
        Company.findByPk(2, { include: ['employes'] })
            .then((company) => {
                res.status(200).json(company);
            })
            .catch((err) => {
                console.log("Error while find company : ", err);
                res.status(500).json(err);
            })
    },
    findOneWorkingDay(req, res) {
        UsersWorkingDay.findByPk(2,{
            include: [
                //'user', 'workingDay'
                { model: models.User,where:{id:1}}
            ]
        })
            .then((result) => {
                res.status(200).json(result);
            })
            .catch((err) => {
                console.log("Error while find company : ", err);
                res.status(500).json(err);
            })
    },
    findOneWorkingDayAll(req, res) {
        UsersWorkingDay.findAll({
            where:{userId:1},
            include: [
                //'user', 'workingDay'
                { 
                    model: models.User
                   // where:{id:1}
                }
            ]
        })
            .then((result) => {
                res.status(200).json(result);
            })
            .catch((err) => {
                console.log("Error while find company : ", err);
                res.status(500).json(err);
            })
    },
    findOneWorkingDayOne(req, res) {
        //console.log(req.body);
        UsersWorkingDay.findOne({
            include: [
                //'user', 'workingDay'
                { model: models.User,where:{id:1}}
            ]
        })
            .then((result) => {
                res.status(200).json(result);
            })
            .catch((err) => {
                console.log("Error while find company : ", err);
                res.status(500).json(err);
            })
    },
    create(req, res) {
        let { email, firstName, lastName, companyId } = req.body
        User.create(
            {
                email: email,
                firstName: firstName,
                lastName: lastName,
                companyId: companyId,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        )
            .then((result) => {
                res.status(200).json(result);
            })
            .catch((err) => {
                console.log("Error while find company : ", err);
                res.status(500).json(err);
            })
    },
    findAllUser(req, res) {
        User.findAll({
            where:{id:1},
            include: [
                //'user', 'workingDay'
                { 
                    model: models.WorkingDay
                   // where:{id:1}
                }
            ]
        })
            .then((result) => {
                res.status(200).json(result);
            })
            .catch((err) => {
                console.log("Error while find company : ", err);
                res.status(500).json(err);
            })
    }
}