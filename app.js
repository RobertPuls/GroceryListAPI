const express = require("express");
const bodyParser = require("body-parser");
const grocery_items = require("./routes/grocery_items");
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/grocery_items",grocery_items);

app.use(function (req, res, next){
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next){
  // res.locals.message = err.message;
  // res.local.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.json({
    "message": err.message,
    "error": req.app.get("env") === "development" ? err : {}
  });
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("ready");
});
