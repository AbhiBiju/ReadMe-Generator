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
    validate(value) {
      const pass = value.match(/^\S+$/i);
      if (pass) {
        return true;
      }

      return "Please enter a valid Github username";
    },
  },
  {
    type: "suggest",
    name: "email",
    message: "What is your email address?",
    default: "johnDoe@gmail.com",
    suggestions: ["abhinavbiju29@gmail.com"],
    validate(value) {
      const pass = value.match(/^\S+@\S+\.\S+$/i);
      if (pass) {
        return true;
      }

      return "Please enter a valid email";
    },
  },
  {
    type: "input",
    name: "title",
    message: "What is your project's name?",
    default: "Project Title",
    validate(value) {
      if (value === "" || value === " " || value.match(/^(\S)(.*)(\S)$/g) == null) {
        return "Please enter a valid title";
      }
      return true;
    },
  },
  {
    type: "suggest",
    name: "description",
    message: "Please write a short description of your project:",
    suggestions: [
      "Simple app created with",
      "Dynamic app created with",
      "This project utilizes",
      "In this Challenge, I used to create a Dynamic which can be used to .It utilizes",
      "In this project, I utilized to",
      "This app, powered by , aims to , based on",
    ],
  },
  {
    type: "checkbox",
    name: "languages",
    message: "What Technologies/ Languages did you use?",
    choices: ["HTML", "CSS", "JavaScript", "jQuery", "Node.js", "SQL", "React.js"],
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
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?",
    default: "node index.js",
  },
  {
    type: "input",
    name: "test",
    message: "What command should be used to run tests?",
    default: "npm test",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "suggest",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?",
    suggestions: [
      "There are many ways in which you can contribute, beyond writing code. If you have any questions or concerns, please email at . If you find any reproduceable problems with the generator, please report/file an issue. Thank you for contributing!",
    ],
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
    writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
  });
}

// Function call to initialize app
init();
