// TODO: Include packages needed for this application
import inquirer from "inquirer";
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  // Project Title
  {
    type: "input",
    name: "title",
    message: "What is your project's title?",
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
    type: "checkbox",
    name: "license",
    message: "How can you test your project?",
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
  // Questions
  {
    type: "input",
    name: "questions",
    message: "How would you like people to contact you for questions?",
  },
  // GitHub UserName
  {
    type: "input",
    name: "github",
    message: "How can you test your project?",
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
