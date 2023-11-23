import controller from "./domain/controller/controller";

class App {
  async play() {
	const control = new controller();
	await control.run();
  }
}
export default App;
// module.exports = App;
