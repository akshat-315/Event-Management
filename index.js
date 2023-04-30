const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Merasir315",
  database: "event",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

app.post("/data", async (req, res) => {
  const {
    name,
    branch,
    dob,
    phone_no,
    gmail,
    E_type,
    E_name,
    decoration,
    food,
    special_guest,
    // college_name,
    // committee_name,
    // designation,
    // pay_date,
    // amount,
  } = req.body;
  if (
    !name ||
    !branch ||
    !dob ||
    !phone_no ||
    !gmail ||
    !E_type ||
    !E_name ||
    !decoration ||
    !food ||
    !special_guest
    // !college_name ||
    // !committee_name ||
    // !designation ||
    // !pay_date ||
    // !amount
  ) {
    res.status(400).send({ message: "All fields are required" });
    return;
  }

  try {
    insertStudent();
    insertEvent();
    insertBudget();
    //  insertCollege();
    //  insertCommittee();
    //  insertPass();
    res.status(200).send({ message: "Success" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server error" });
  }

  function insertStudent() {
    return (resolve, reject) => {
      const student = { name, branch, dob, phone_no, gmail };
      connection.query("INSERT INTO student SET ?", student, (err, result) => {
        if (err) {
          reject(err);
        } else {
          console.log("Student data inserted successfully");
          resolve();
        }
      });
    };
  }

  function insertEvent() {
    return (resolve, reject) => {
      const event = { E_type, E_name };
      connection.query("INSERT INTO event SET ?", event, (err, result) => {
        if (err) {
          reject(err);
        } else {
          console.log("Event data inserted successfully");
          resolve();
        }
      });
    };
  }
  function insertBudget() {
    return (resolve, reject) => {
      const budget = { decoration, food, special_guest, E_id };
      connection.query("INSERT INTO budget SET ?", budget, (err, result) => {
        if (err) {
          reject(err);
        } else {
          console.log("Budget data inserted successfully");
          resolve();
        }
      });
    };
  }
  //  function insertCollege() {
  //   return  ((resolve, reject) => {
  //     const college = { college_name };
  //     connection.query("INSERT INTO event SET ?", college, (err, result) => {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         console.log("Event data inserted successfully");
  //         resolve();
  //       }
  //     });
  //   });
  // }
  //  function insertCommittee() {
  //   return  ((resolve, reject) => {
  //     const committee = { committee_name };
  //     connection.query("INSERT INTO event SET ?", committee, (err, result) => {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         console.log("Event data inserted successfully");
  //         resolve();
  //       }
  //     });
  //   });
  // }
  //  function insertPass() {
  //   return  ((resolve, reject) => {
  //     const pass = { pay_date, amount };
  //     connection.query("INSERT INTO event SET ?", pass, (err, result) => {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         console.log("Event data inserted successfully");
  //         resolve();
  //       }
  //     });
  // });

  // connection.query("INSERT INTO budget SET ?", budget, (err, result) => {
  //   if (err) {
  //     console.log(err);
  //     res.status(500).send({ message: "Server error" });
  //     return;
  //   }
  //   console.log("Budget data inserted successfully");
  //   res.status(200).send({ message: "Success" });
  // });

  // connection.query("INSERT INTO college SET ?", college, (err, result) => {
  //   if (err) {
  //     console.log(err);
  //     res.status(500).send({ message: "Server error" });
  //     return;
  //   }
  //   console.log("College data inserted successfully");
  //   res.status(200).send({ message: "Success" });
  // });

  // connection.query("INSERT INTO committee SET ?", committee, (err, result) => {
  //   if (err) {
  //     console.log(err);
  //     res.status(500).send({ message: "Server error" });
  //     return;
  //   }
  //   console.log("Committee data inserted successfully");
  //   res.status(200).send({ message: "Success" });
  // });

  // connection.query("INSERT INTO pass SET ?", pass, (err, result) => {
  //   if (err) {
  //     console.log(err);
  //     res.status(500).send({ message: "Server error" });
  //     return;
  //   }
  //   console.log("pass data inserted successfully");
  //   res.status(200).send({ message: "Success" });
  // });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
