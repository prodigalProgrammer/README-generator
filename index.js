const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project's title?",
  },
  {
    type: "input",
    name: "description",
    message: "Please add a description for your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide installation requirements:",
  },
  {
    type: "input",
    name: "usage",
    message: "How is this application used?",
  },
  {
    type: "list",
    name: "license",
    message: "Please select the license for your project",
    choices: ["Apache 2.0", "Boost Software", "MIT", "Mozilla Public"],
  },
  {
    type: "input",
    name: "github",
    message: "What is the URL to your GitHub profile?",
  },
  {
    type: "input",
    name: "email",
    message: "And lastly... Please input your email address:",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
inquirer.prompt(questions).then((data) => {
  const fileName = `${data.title.toLowerCase().split(" ").join("")}.json`;
  console.log(fileName);
});
