// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown=require("./utils/generateMarkdown");
const { default: Choice } = require('inquirer/lib/objects/choice');
const fs = require('fs');

// user questions for creating the readme
const questions = [
{
	type:"input",
	name:"title",
	message:"Enter a name for the project?"
},
{
	type:"input",
	name:"description",
	message:"Enter a description of the project"
},
{
	type:"input",
	name:"installation",
	message:"Enter installation instruction for the project"
},{
	type:"input",
	name:"usage",
	message:"Enter usage instructions for the project"
},
{
	type:"input",
	name:"contribution",
	message:"Enter contribution guidelines for the project"
},{
	type:"input",
	name:"tests",
	message:"Enter information about tests for the project"
},
{
	type:"list",
	name:"license",
	message:"Choose the type of liscense the project will use",
	choices: ["MIT", "Apache 2.0", "BSD 3-Clause", "GNU General Public 2.0", "none"]
},
{
	type:"input",
	name:"username",
	message:"Enter your GitHub username"
},
{
	type:"input",
	name:"email",
	message:"Enter your email address"
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then((data) => {
	console.log(data);
	writeToFile(`${data.title} README.md`, generateMarkdown({... data}))
})
}

// Function call to initialize app
init();
