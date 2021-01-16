const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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
    res.send({ success: true, data: fetchedData });
});

app.get("/:id", (req, res) => {
    const { id } = req.params;
    const result = fetchedData.filter(
        (employee) => employee.id === parseInt(id)
    )[0];
    if (result) {
        res.send({ success: true, data: result });
    }
    res.send({ success: false, error: "No Employee With that id" });
});

app.post("/", (req, res) => {
    console.log(req);
    const employee = req.body;
    employee.id = Math.round(Math.random() * 1000);

    console.log("Data with Id => ", employee);
    // const theEmployee = JSON.parse(Object.keys(employee)[0]);
    // // console.log("Request from Browser => ", theEmployee);
    fetchedData.push(employee);
    res.send({ success: true, body: req.body });
});

app.delete("/:id", (req, res) => {
    const { id } = req.params;
    fetchedData = fetchedData.filter(
        (employee) => employee.id !== parseInt(id)
    );
    res.send({
        success: true,
        data: id,
    });
});

app.patch("/:id", (req, res) => {
    const { id } = req.params;
    const employee = req.body;
    for (let i = 0; i < fetchedData.length; i++) {
        if (fetchedData[i].id === parseInt(id)) {
            fetchedData[i] = employee;
            fetchedData[i].id = parseInt(id);
            res.send({
                success: true,
                data: id,
            });
        }
    }
    res.send({
        success: false,
        error: "No Employee with the id",
    });
});

app.get("*", (req, res) => {
    res.send({ success: false, error: "page not found" });
});
app.listen(port, () => {
    console.log(`Java app listening at http://localhost:${port}`);
});
