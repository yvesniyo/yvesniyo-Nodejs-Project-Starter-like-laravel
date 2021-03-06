const resHelper = require("../../Helpers/ResHelper");
class UserController {


    constructor({ usersService, resHelper }) {
        this.usersService = usersService
        this.resHelper = resHelper
    }

    async getAllUsers({ req, res, next }) {
        const users = await this.usersService.getAllUsers();
        this.resHelper({
            res,
            data: {
                loggedInUser: req.user,
                result: users,
            }
        })
    }

    async getSingleUser({ req, res, next }) {
        const user = await this.usersService.find(req.params.id);
        this.resHelper({
            res,
            data: {
                loggedInUser: req.user,
                result: user,
            }
        })
    }
}


module.exports = UserController