const { createPool } = require("mysql2");

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "Merasir315",
  database: "event",
  connectionLimit: 10,
});

pool.query(`select * from student`, (err, res) => {
  if (err) {
    return console.log(err);
  }
  return console.log(res);
});
