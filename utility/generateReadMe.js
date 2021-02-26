// Function to write the readME file using the user input
function writeToFile(fileName, data) {
	return fs.writeFileSync(path.join(process.cwd(), fileName), data);

//write the function to initialize the application
function init(){
	inquirer.prompt(questions).then((inquirerResponses) => {
	
})


//create a function that returns the license link based on the user pick of none return something.
//create a function that returns the license section of the readME if there is none return something

function generateReadMe(data) {
return `
	##Description
	${data.description}

    ##Table of Contents
    
	##Github User
	${data.github}

	##Github Email
	${data.email}
	
	##User License
	${data.license}

	`
}

module.exports = generateReadMe;
