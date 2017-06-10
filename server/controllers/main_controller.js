const mainController = {};

mainController.hello = (req, res) => {
  res.json({ message: "HELLO" });
}
module.exports = mainController;
