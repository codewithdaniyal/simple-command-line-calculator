import inquirer from "inquirer"

const answer = await inquirer.prompt([
    {message: "Enter Your First Number", type :"number", name:"firstnumber"},
    {message: "Enter Your Second Number", type :"number", name:"secondnumber"},
    {message: "Select one of operator to perform action", type: "list", name: "operator"}
])