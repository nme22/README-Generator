const inqirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateReadme = require('./');


//create my array of questions for the user input
//  prompt for title, description, table of contents, installation, usage, license, contributing, tests, and questions.
function promptUser(){[
	{
		type: "input",
		name: "projectTitle",
		message: "What is the title of this project?"
	},
	{
		type: "input",
		name: "description",
		message: "Describe your project"
	},
	{
		type: "input",
		name: "Installation",
		message: "If applicable, what is the installation process? "
	},
	{
		type: "input",
		name: "usage",
		message: "What is this project used for?"
	},
	{
		type: 'list',
		name: 'license',
		message: 'What kind of license is your project using?',
		choices: [
			'MIT',
			'APACHE',
			'MIT',
			'MOZILLA',
			'NONE'
		]
	},
	{
		type: 'input',
		name: 'github',
		message: 'what is your github username?'
	},
	{
		type: 'input',
		name: 'email',
		message: 'what is your email address?'
	},
	
]

// Function to write the readME file using the user input
function writeToFile(fileName, data) {
	return fs.writeFileSync(path.join(process.cwd(), fileName), data);

//write the function to initialize the application
function init(){
	inquirer.prompt(questions).then((inquirerResponses) => {
	
})


//create a function that returns the license link based on the user pick of none return something.
//create a function that returns the license section of the readME if there is none return something

function generateMarkdown(data) {
return `
	##Description
	${data.description}

	##Github User
	${data.github}

	##Github Email
	${data.email}
	
	##User License
	${data.license}

	`
}

module.exports = generateMarkdown;
