// Creating an Object to hold the license badge and info link information
const licenseObj = [
  {
    name: "Apache License 2.0",
    badge:
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    link: "https://opensource.org/licenses/Apache-2.0",
  },
  {
    name: "GNU GPLv3",
    badge:
      "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    link: "https://www.gnu.org/licenses/gpl-3.0",
  },
  {
    name: "MIT License",
    badge:
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    link: "https://opensource.org/licenses/MIT",
  },
  {
    name: "Mozilla Public License 2.0",
    badge:
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    link: "https://opensource.org/licenses/MPL-2.0",
  },
  {
    name: "ODBL",
    badge:
      "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)",
    link: "https://opendatacommons.org/licenses/odbl/",
  },
];

// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseChoice = licenseObj.filter((choice) => choice.name === license);
  return licenseChoice[0].badge;
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseChoice = licenseObj.filter((choice) => choice.name === license);
  return licenseChoice[0].link;
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `${license}`;
  } else return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  ${data.description}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributing](#contributing)
  - [Questions](#questions)
  - [Tests](#tests)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  
  This repository is under the license ${renderLicenseSection(data.license)}.
  For more information see ${renderLicenseLink(data.license)}

  ## Contributing
  ${data.contributing}

  ## Questions
  
  Please contact me via the following methods.
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}

  ## Tests
  ${data.tests}`;
}

module.exports = generateMarkdown;
