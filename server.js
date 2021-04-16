// Set up requirements
const express = require("express");
const routes = require("./routes/routes");
const sequelize = require("./config/connection");
const inquirer = require("inquirer");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use(routes);

const start = () => {
    inquirer
        .prompt(
            {
                type: "list",
                message: "What would you like to do?",
                name: "choice",
                choices: ["POST", "BID", "EXIT"]
            }
        )
        .then((response) => {
            switch(response.choice) {
                case ("POST"):
                    console.log("COOL");
                    break;
                case ("BID"):
                    console.log("ALRIGHT");
                    break;
                case ("EXIT"):
                    console.log("KICK IT");
                    break;
                default:
                    console.log("MY DAD BEATS ME");
            }
        })
}

sequelize.sync({ force:false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on PORT: ${PORT}`));
    start();
});