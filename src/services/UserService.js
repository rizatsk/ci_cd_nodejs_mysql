const db = require("../../models");
const { User } = require("../../models");

class UserService {
    constructor() {
        this._pool = db.sequelize;
    }

    async addUser({ name, email, password }) {
        try {
            const data = await User.create({
                name,
                email,
                password
            }, { returning: true });

            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async getDataUser() {
        const [data] = await this._pool.query('SELECT * FROM users');
        return data;
    }
}

module.exports = UserService;