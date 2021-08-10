// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  { type: "input", name: "github", message: "What is your GitHub username?" },
  { type: "input", name: "email", message: "What is your email addess?" },
  { type: "input", name: "title", message: "What is your project's name?" },
  { type: "input", name: "", message: "" },
  { type: "list", name: "", message: "", choices:[] },
  { type: "input", name: "", message: "" },
  { type: "input", name: "", message: "" },
  { type: "input", name: "", message: "" },
  { type: "input", name: "", message: "" },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
