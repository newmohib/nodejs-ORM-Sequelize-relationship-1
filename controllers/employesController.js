const models = require('../models');
const User = models.User;
const Company = models.Company;
const WorkingDay = models.WorkingDay;






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
                // Get the Company with Users (employes) datas included
                // Get the Users (employes) records only
                // console.log(company)
                // console.log(company.get().employes)
                res.status(200).json(company);
            })
            .catch((err) => {
                console.log("Error while find company : ", err);
                res.status(500).json(err);
            })
    },
    findOneWorkingDay(req, res) {
        WorkingDay.findByPk(2, { include: ['employes'] })
            .then((company) => {
                // Get the Company with Users (employes) datas included
                // Get the Users (employes) records only
                // console.log(company)
                // console.log(company.get().employes)
                res.status(200).json(company);
            })
            .catch((err) => {
                console.log("Error while find company : ", err);
                res.status(500).json(err);
            })
    }
}