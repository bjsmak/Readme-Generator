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
    name:"license",
    message:"Please provide your license"
},
{
    type:"input",
    name:"github",
    message:"Please enter your Github Username"
},
{
    type:"input",
    name:"email",
    message:"Please provide your email address"
},
];

inquirer
    .prompt(questions)
    .then(function(data){
        const queryURL = 'https://api.github.com/users/${data.github}';

        axios.get(queryURL).then(function(res) {

            const gitHubProfile = {
                name: res.data.name,
                profile: res.data.html_url
            };

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
