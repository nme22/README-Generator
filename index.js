// Location of Dependencies and global var
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadMe = require('./utility/generateReadMe');






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
			name: "installation",
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

//write the function to initialize the application
async function init(){
	try {
		// Asks questions and grabs responses
		const data = await promptUser();
		const writeReadMe = generateReadMe(data);

		// Write ReadMe.md and send to a folder
		await writeFile('./product', writeReadMe);
		console.log(' Generated to README.md');
	} catch(err) {
		console.log(err)
	}
}

init();