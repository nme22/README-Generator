// Location of Dependencies and global var
const inqirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateReadme = require('./');
const inquirer = require('inquirer');


//create my array of questions for the user input
//  prompt for title, description, table of contents, installation, usage, license, contributing, tests, and questions.
function promptUser(){
	return inquirer.prompt([
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
			name: 'contributors',
			message: 'Who contributed to this project? '
		},
		{
			type: 'input',
			name: 'tests',
			message: 'Was the code tested?'
		},
		{
			type: 'input',
			name: 'questions',
			message: 'What if this project has an issue?'
		},
		{
			type: 'input',
			name: 'username',
			message: 'what is your Github username?'
		},
		{
			type: 'input',
			name: 'email',
			message: 'what is your email address?'
		}
	]);
}
// // Function to write the readME file using the user input
// function writeToFile(fileName, data) {
// 	return fs.writeFileSync(path.join(process.cwd(), fileName), data);

// //write the function to initialize the application
// function init(){
// 	inquirer.prompt(questions).then((inquirerResponses) => {
	
// })


// //create a function that returns the license link based on the user pick of none return something.
// //create a function that returns the license section of the readME if there is none return something

// function generateMarkdown(data) {
// return `
// 	##Description
// 	${data.description}

// 	##Github User
// 	${data.github}

// 	##Github Email
// 	${data.email}
	
// 	##User License
// 	${data.license}

// 	`
// }

// module.exports = generateMarkdown;
