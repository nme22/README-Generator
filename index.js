// Location of Dependencies and global var
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadMe = require('./utility/generateReadMe');





//create my array of questions for the user input
//  prompt for title, description, table of contents, installation, usage, license, contributing, tests, and questions.
const questions =[ 
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
			// Lists different types of licenses for projects
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
			//Asks user for their Githhub Username
			type: 'input',
			name: 'username',
			message: 'what is your Github username?'
		},
		{
			// Asks user for their Email Address
			type: 'input',
			name: 'email',
			message: 'what is your email address?'
		}
];
// function to write the README
function writeToFile(fileName, data) {
	fs.writeFile(fileName, (data), (err) =>
	err ? console.error(err) : console.log('Got it!')
	);
}

function init() {
    // run the inquirer. prompt function to prompt questions
    inquirer.prompt(questions).then((answers) => { 
        writeToFile('README.md', generateReadMe(answers))
    });
     
}

init();