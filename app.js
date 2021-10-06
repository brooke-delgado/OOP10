const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path"); // helps us resolve paths to directories
const fs = require("fs"); // (file system) CRUD for your computer files
// const Managercard = require("./htmlRender/Managercard");
// const Engineercard = require("./htmlRender/Engineercard");
// const Interncard = require("./htmlRender/Intercard");
// const Rendermain = require("./htmlRender/Rendermain");

const Pathoutput = path.resolve(_dirname, "output", "crew.html");

const TeamMate = [];

function main() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name", // we access the users answer by this key
        message: "What is your managers name?",
      },
      {
        type: "input",
        name: "id",
        message: "what is your managers id?",
      },
      {
        type: "input",
        name: "email",
        message: "what is your managers email?",
      },
      {
        type: "input",
        name: "office",
        message: "What is the managers office",
      },
    ])
    .then((answers) => {
      var { name, id, email, office } = answers;
      var manager = Manager(name, id, email, office);

      TeamMate.push(manager);

      createYourTeam();
    });
}

function createYourTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "would you like to add additional team mates?",
        choices: ["Add Intern", "Add Engineer", "Team is complete"],
      },
    ])
    .then((answers) => {
      statement = answers.command;
      switch (statement) {
        case "add Engineer":
          EngineerGet();
          break;

        case "Add Intern":
          Internget();
          break;
        case "Create Team":
          makeTeam();
          break;
      }
    });
}
