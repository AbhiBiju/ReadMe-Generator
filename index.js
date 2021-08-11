// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
inquirer.registerPrompt("suggest", require("inquirer-prompt-suggest"));
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "suggest",
    name: "github",
    message: "What is your GitHub username?",
    default: "JohnDoe",
    suggestions: ["AbhiBiju"],
  },
  {
    type: "suggest",
    name: "email",
    message: "What is your email address?",
    default: "johnDoe@gmail.com",
    suggestions: ["abhinavbiju29@gmail.com"],
  },
  {
    type: "input",
    name: "title",
    message: "What is your project's name?",
    default: "Project Title",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project:",
    default:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quod. Quas blanditiis cumque expedita quidem magnam illum cum, maxime consequatur beatae et illo aperiam magni exercitationem a corporis atque? Nam!",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "suggest",
    name: "deployedLink",
    message: "What is the project's deployed application link?",
    suggestions: ["https://.github.io/", "https://abhibiju.github.io/"],
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
    default: "npm i",
  },
  { type: "input", name: "test", message: "What command should be run to run tests?", default: "npm test" },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?",
    default: "node index.js",
  },
  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?",
    default:
      "There are many ways in which you can contribute, beyond writing code. If you have any questions or concerns, please email at abhinavbiju29@gmail.com. If you find any reproduceable problems with the generator, please report/file an issue. Thank you for contributing!",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("Generating README...");
    console.log(inquirerResponses);
    writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
  });
}

// Function call to initialize app
init();
