// TODO: Include packages needed for this application
import inquirer from "inquirer";
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMardown");

// TODO: Create an array of questions for user input
const questions = [
  // Project Title
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
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter a repository description.");
      }
    },
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
    type: "checkbox",
    name: "license",
    message: "How can you test your project?",
    choices: [
      "Apache License 2.0",
      "GNU GPLv3",
      "GNU GPLv2",
      "MIT License",
      "Mozilla Public License 2.0",
      "The Unlicense",
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
