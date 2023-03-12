class HomeHandler {
  constructor({ service }) {
    this._service = service;

    this.getDataHomeHandler = this.getDataHomeHandler.bind(this);
  }

  async getDataHomeHandler() {
    const user = this._service.getDataUser();
    return {
      status: "success",
      message: `Welcome To The Docker Bro`,
      data: user,
    };
  }
}

module.exports = HomeHandler;
