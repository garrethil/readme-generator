const inquirer = require('inquirer');
const fs = require('fs');


const generateReadme = ({ title, description, installation, usage, license, contribute, tests, github, email}) =>
  `# ${title}

  ## Description
  ${description}


  ## Table of Contents
  - - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  
  ## Installation
  ${installation}
  
  ## Usage
  ${usage}  

  
  ## License
  ${license}


  ## How to Contribute
  ${contribute}
    
  ## Tests
  ${tests}

  ## Questions
  [Github Profile](https://github.com/${github})

  For any further questions you may use this email: ${email}
  `;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please explaining the what, why, and how of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What installation steps are there to run your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Explain how you expect someone to use your product.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please select a license for your project.',
      choices: ['MIT License','Apache License 2.0', 'Other'],
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'How should others go about making their own contributions to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Are there any tests you wrote for this project? How could we run them?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username.',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter an email users/contributers could reach you.',
      },
  ])
  .then((answers) => {
    const readmeContent = generateReadme(answers);

    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Your README.md file was created for your project!')
    );
  });
