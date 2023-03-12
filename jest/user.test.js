const UserService = require("../src/services/UserService");
const UserServiceTest = require("../test/UserServiceTest");

const userService = new UserService();
const userServiceTest = new UserServiceTest();

afterAll(async () => {
    await userServiceTest.deleteAllUsers();
});

describe('Get data user', () => {
    test("Get data user dari database ketika data kosong", async function () {
        const result = await userService.getDataUser();

        expect(result.length < 1).toBe(true);
    });

    test("Insert data ke dalam database", async function () {
        const data = {
            name: 'Rizat Sakmir',
            email: 'rizatsk@gmail.com',
            password: 'dangsky@gmail.com'
        };

        const result = await userService.addUser(data);

        expect(result.name).toBe(data.name);
    })

    test("Get data user dari database ketika terdapat datanya", async function () {
        const result = await userService.getDataUser();

        expect(result.length > 0).toBe(true);
    });

    test("Get data user pertama dari database", async function () {
        const result = await userService.getDataUser();

        expect(result[0].name).toBe('Rizat Sakmir');
    })
});