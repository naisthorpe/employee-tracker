// Set up requirements
const express = require("express");
const routes = require("./routes/routes");
const sequelize = require("./config/connection");
const inquirer = require("inquirer");

const router = require("express").Router();

const Department = require("./models/Department");
const Job = require("./models/Job");
const Employee = require("./models/Employee");

const getAllEmployees = require("./routes/api/employeeRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use(routes);

const start = () => {
    console.log("\n");
    inquirer
        .prompt(
            {
                type: "list",
                message: "What would you like to do?",
                name: "choice",
                choices: ["ADD Department", "ADD Job", "ADD Employee", "VIEW Departments", "VIEW Jobs", 
                    "VIEW Employees", "UPDATE Employee Job", "EXIT Application"]
            }
        )
        .then((response) => {
            switch(response.choice) {
                case ("ADD Department"):
                    addDepartment();
                    break;
                case ("ADD Job"):
                    addJob();
                    break;
                case ("ADD Employee"):
                    addEmployee();
                    break;
                case ("VIEW Departments"):
                    viewDepartments();
                    break;
                case ("VIEW Jobs"):
                    viewJobs();
                    break;
                case ("VIEW Employees"):
                    viewEmployees();
                    break;
                case ("UPDATE Employee Job"):
                    updateEmployeeJob();
                    break;
                default:
                    console.log("Add connection end here.");
            }
        })
};

const addDepartment = () => {
    inquirer
        .prompt(
            {
                type: "input",
                message: "What is the department name to be added?",
                name: "deptName"
            }
        )
        .then((response) => {
            app.post("/api/department", (req, res) => {
                Department.create({
                    name: response.deptName
                })
                .then((newDept) => {
                    res.json(newDept);
                })
                .catch((err) => {
                    res.json(err);
                })
            });
            console.log(response.deptName);
            console.log("\n======\n");
            start();
        })
};

const viewEmployees = () => {
    getAllEmployees();
}

sequelize.sync({ force:false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on PORT: ${PORT}`));
    start();
});
