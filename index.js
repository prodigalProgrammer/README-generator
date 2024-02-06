const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

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

// Adding the 'questions' array to a function that prompts user
const promptUser = () => inquirer.prompt(questions);

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program asyncronously
async function init() {
  console.log("Welcome to the Professional README Generator!");
  try {
    // Containing users' answers into a variable
    const userAnswers = await promptUser();
    const markdown = generateMarkdown(userAnswers);
    const fileName = "README.md";
    await writeFileAsync(fileName, markdown);
    console.log("Successfully created README.md");
  } catch (err) {
    console.log(err);
  }
}

// function call to initialize program
init();
