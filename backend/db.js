const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "speedtype",
  password: "votre_mot_de_passe",
  port: 5432,
});

module.exports = pool;
