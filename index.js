// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  // Repository Title
  {
    type: "input",
    name: "title",
    message: "What is your project's title?",
    // Validating there is a description value entered
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("A repository name is required!");
        return false;
      }
    },
  },
  // Description
  {
    type: "input",
    name: "description",
    message: "What is your project's description?",
  },
  // Installation
  {
    type: "input",
    name: "installation",
    message: "How do you install your project?",
  },
  // Usage
  {
    type: "input",
    name: "usage",
    message: "What is it's usage?",
  },
  // License
  {
    type: "list",
    name: "license",
    message: "Choose a license.",
    choices: [
      "Apache License 2.0",
      "GNU GPLv3",
      "MIT License",
      "Mozilla Public License 2.0",
      "ODBL",
    ],
  },
  // Contributing
  {
    type: "input",
    name: "contributing",
    message: "How can others contribute to your project?",
  },
  // Testing
  {
    type: "input",
    name: "tests",
    message: "How can you test your project?",
  },
  // GitHub UserName
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  //Email Address
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Sucessfully created README.md!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (userInput) {
    writeToFile("README.md", generateMarkdown(userInput));
  });
}

// Function call to initialize app
init();
