const pool = require('pg').Pool

const pool = new Pool({
  user: "postgres",
  password: "testpassword",
  host: "localhost",
  port: "5432",
  database: "jwtt"
});

module.exports = pool;