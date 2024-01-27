const inquirer = require('inquirer');


const generateREADME = ({ title, description}) =>
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
  
  N/A
  
  ## Usage


  
  ## License



  ## Contributing



  ## Tests


  ## Questions
  
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
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])
  .then((answers) => {
    const readmeContent = generateREADME(answers);

    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Your README.md file was created for your project!')
    );
  });
