const fs = require('fs');
const inquirer = require('inquirer');
const generateMD = require('./utils/generateMarkdown');
const axios = require('axios');


// array of questions for user
const questions = [
{
    type:"input",
    name:"title",
    message:"What is your project title?"
}, 
{
    type:"list",
    name:"badge",
    message:"Choose from the following badges",
    choices: ['MIT', 'Apache', 'IBM', 'Perl']
}, 
{
    type:"input",
    name:"description",
    message:"Please enter description"
}, 
{
    type:"input",
    name:"install",
    message:"Are there any installation instructions?"
}, 
{
    type:"input",
    name:"contribution",
    message:"Please list any contribution guidelines"
}, 
{
    type:"input",
    name:"test",
    message:"Please list any test instructions"
},
{
    type:"input",
    name:"github",
    message:"Please enter your Github username"
},
{
    type:"input",
    name:"email",
    message:"Please provide your email address"
},
];

//Inquirer to generate user questions
inquirer
    .prompt(questions)
    .then(function(data){
        //API call for github user info
        const queryURL = `https://api.github.com/users/${data.github}`;
        //Axios call
        axios.get(queryURL).then(function(res) {

            const gitHubProfile = {
                name: res.data.login,
                profile: res.data.html_url
            };
            //Write README with questions array data and github info
            fs.writeFile("README.md", generateMD(data,gitHubProfile), function(err) {
                if (err) {
                  throw err;
                };
            console.log("README FILE CREATED");
            });
        })
    });

// function to initialize program
function init() {

}

// function call to initialize program
init();
