const { default: controller } = require("./domain/controller/controller");

class App {
  async play() {
	const control = new controller()
	await control.run();
  }
}

module.exports = App;
