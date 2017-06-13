const knex = require("./knex");

module.exports = {
  getAll: function (){
    return knex("grocery_item");
  },
  getOne: function (id){
    return knex("grocery_item").where("id", id).first();
  },
  create: function (newItem){
    return knex("grocery_item").insert(newItem).returning("*");
  },
  delete: function (id){
    return knex("grocery_item").where("id", id).del();
  },
  put: function (id, updateItem){
    return knex("grocery_item").where("id", id).update(updateItem);
  }
};
