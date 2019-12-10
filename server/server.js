const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = express.Router();
const PORT = 4000;
let Bank = require("./searchbank.model.js");
var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/tutorial", {
  useNewUrlParser: true
});
const connection = mongoose.connection;
connection.once("open", function(callback) {
  console.log("MongoDB database connection established successfully");
});
app.use(cors());
app.use(bodyParser.json());
routes.route("/").get(function(req, res) {
  Bank.find(function(err, results) {
    if (err) {
      console.log(err);
    } else {

      res.json(results);
    }
  });
});
routes.route("/add").post(function(req, res) {
  let result = new Bank(req.body);
  result
    .save()
    .then(result => {
      res.status(200).json({ result: "result saved." });
    })
    .catch(err => {
      res.status(400).send("result add failed.");
    });
});
app.use("/tutorial", routes);
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
