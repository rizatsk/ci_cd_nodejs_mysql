const app = require("../src/app");
const HomeService = require("../src/services/HomeService");

const homeService = new HomeService();

describe("/home endpoint", () => {
  it("should response 200", async () => {
    const server = await app();

    const response = await server.inject({
      method: "GET",
      url: "/api",
    });

    const responseJson = JSON.parse(response.payload);
    console.log(responseJson);
    expect(response.statusCode).toEqual(200);
    expect(responseJson.status).toEqual("success");
    expect(responseJson.message).toEqual("Welcome To The Docker Bro");
  });
});
