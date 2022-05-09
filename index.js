const inquirer = require('inquirer');

var readmefinal = "";
var title = ""; 
var desc = "";
var install = "";
var usage = "";
var contribution = "";
var testing = "";

inquirer
.prompt([
    {
        type: "input",
        name: "title",
        message: "Give the README a title: "
    },
    {
        type: "input",
        name: "desc",
        message: "Give the README a description: "
    },
    {
        type: "input",
        name: "install",
        message: "Give the README installation instructions: "
    },
    {
        type: "input",
        name: "usage",
        message: "Give the README usage information: "
    },
    {
        type: "input",
        name: "contribution",
        message: "Give the README contribution guidelines: "
    },
    {
        type: "input",
        name: "testing",
        message: "Give the README testing instructions: "
    },
    {
        type: "list",
        name: "license",
        message: "Give the README a license: ",
        choices: ["MIT", "Mozilla", "IBM", "ISC"]
    }

])
.then(answers => {

})
.catch(errors => {
    console.log({errors});
});