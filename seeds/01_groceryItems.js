
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
    return knex.raw('TRUNCATE grocery_item RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('grocery_item').insert([
        {
          item: "melk",
          quantity: 1,
          units: "gallons"
        },
        {
          item: "banana",
          quantity: 2
        },
        {
          item: "oatmeal",
          quantity: 1,
          units: "pound"
        },
        {
          item: "icedcream",
          quantity: 5,
          units: "pounds"
        },
        {
          item: "beef",
          quantity: 1,
          units: "cow"
        },
        {
          item: "eggs",
          quantity: 1,
          units: "chicken load"
        },
        {
          item: "more icedcream",
          quantity: 5,
          units: "more pounds"
        },
        {
          item: "avocado",
          quantity: 1,
          units: "Enough for one CJ"
        },
        {
          item: "Puppy",
          quantity: 2,
          units: "cute puppers"
        },
        {
          item: "brown rice",
          quantity: 1,
          units: "pound"
        },
      ]);
    });
};
