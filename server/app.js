const express = require("express");
const app = express();
const port = 3000;
let fetchedData = [
    {
        id: 1,
        employeeName: "Java The man",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },
    {
        id: 2,
        employeeName: "Alemlate",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },
    {
        id: 3,
        employeeName: "Jemal",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },
    {
        id: 4,
        employeeName: "Temesgen",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },
    {
        id: 5,
        employeeName: "Fifty",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },

    {
        id: 6,
        employeeName: "Tedi",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },
    {
        id: 7,
        employeeName: "Mere",
        dateOfBirth: "1919/23/2",
        gender: "Male",
        salary: "50,000",
    },
];
// the app is small scale so we dont need a router folder
app.get("/", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(fetchedData);
});

app.post("/", (req, res) => {
    res.send(fetchedData);
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
