// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: "postgres://localhost/groceryList"
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};
