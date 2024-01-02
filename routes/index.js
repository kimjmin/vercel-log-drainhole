var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  // res.render("index", { title: "Express" });
  res.send("GET request to the home page");
});

router.post("/", function (req, res, next) {
  console.log("%j", req.body);
  res.send("POSTED");
});

module.exports = router;
