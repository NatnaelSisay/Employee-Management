const express = require("express");
const app = express();
const port = 3000;

// the app is small scale so we dont need a router folder
app.get("/", (req, res) => {
  res.send({
    id: 1,
    name: "Natnael Sisay",
    salary: "5000",
    dateOfBirth: Date.now,
    Gender: "Male",
  });
});

app.post("/", (req, res) => {
  res.send({
    id: 2,
    name: "Java The Glorious",
    salary: "5000",
    dateOfBirth: Date.now,
    Gender: "Male",
  });
});

app.delete("/:id", (req, res) => {
  res.send({
    message: "Deletion was successfull",
  });
});

app.patch("/:id", (req, res) => {
  res.send({
    message: "Update was successfull",
  });
});

app.get("*", (req, res) => {
  res.send("404 page not found");
});
app.listen(port, () => {
  console.log(`Java app listening at http://localhost:${port}`);
});
