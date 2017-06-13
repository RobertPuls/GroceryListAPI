const express = require("express");
const router = express.Router();
const queries = require("../db/queries");

function isValidId(req, res, next){
  if (!isNaN(req.params.id)) {
    return next();
  }
  next(new Error("Invalid ID"));
}

function validItem(item){
  const hasItem = typeof item.item == "string";
  const hasQuantity = typeof item.quantity == "number";
  return hasItem && hasQuantity;
}

router.get("/", (req, res) =>{
  queries.getAll().then(groceryList => res.json(groceryList));
});

router.get("/:id", isValidId, (req, res) => {
  queries.getOne(req.params.id).then(groceryList => res.json(groceryList || "Not Found"));
});

router.post("/", (req, res, next) => {
  if(validItem(req.body)){
    queries.create(req.body).then(result => res.send(result));
  }
  else{
    next(new Error("Invalid Item"));
  }
});

router.delete("/:id", isValidId, (req, res) => {
  queries.delete(req.params.id).then(() => res.send("deleted"));
});

router.put("/:id", isValidId, (req, res, next) => {
  if (validItem(req.body)){
    queries.put(req.params.id, req.body).then(() => res.send("updated"));
  }
  else{
    next(new Error("Invalid Item"));
  }
});

module.exports = router;
