const { User } = require("../models");

class UserServiceTest {
    async deleteAllUsers() {
        try {
            await User.destroy({
                where: {},
                truncate: true
            });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = UserServiceTest;