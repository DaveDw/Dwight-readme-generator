const inquirer = require('inquirer');
const fs = require('fs');

var readmefinal = "";
var title = "";
var desc = "";
var install = "";
var usage = "";
var contribution = "";
var testing = "";

const promptUser = () => {
    return inquirer.prompt([
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
            choices: ["[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)", "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)", "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"]
        },
        {
            type: "input",
            name: "github",
            message: "Enter youur github username: "
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address: "
        }
    ]);
};

const generateREADME = ({ title, desc, install, usage, contribution, testing, license, github, email}) => 
`# ${title}

${desc}

## Installation Instructions

${install}

## Usage

${usage}

## Contributing

${contribution}

## Tests

${testing}

## License

${license}

## Github

[${github}](https://github.com/${github})

## Contact Me

${email}`

const init = () => {
    promptUser()
    .then((answers) => fs.writeFileSync('README-Ex.md', generateREADME(answers)))
    .then(() => console.log('Successfully wrote to new README file'))
    .catch((err) => console.error(err));

}

init();

// inquirer
//     .prompt([
//         {
//             type: "input",
//             name: "title",
//             message: "Give the README a title: "
//         },
//         {
//             type: "input",
//             name: "desc",
//             message: "Give the README a description: "
//         },
//         {
//             type: "input",
//             name: "install",
//             message: "Give the README installation instructions: "
//         },
//         {
//             type: "input",
//             name: "usage",
//             message: "Give the README usage information: "
//         },
//         {
//             type: "input",
//             name: "contribution",
//             message: "Give the README contribution guidelines: "
//         },
//         {
//             type: "input",
//             name: "testing",
//             message: "Give the README testing instructions: "
//         },
//         {
//             type: "list",
//             name: "license",
//             message: "Give the README a license: ",
//             choices: ["MIT", "Mozilla", "IBM", "ISC"]
//         },
//         {
//             type: "input",
//             name: "github",
//             message: "Enter youur github username: "
//         },
//         {
//             type: "input",
//             name: "email",
//             message: "Enter your email address: "
//         }

//     ])
//     .then(answers => {

//     })
//     .catch(errors => {
//         console.log({ errors });
//     });