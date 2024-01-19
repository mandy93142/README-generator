// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Function to generate a badge based on the selected license
  function renderLicenseBadge(license) {
    if (!license) return '';
    return `![License: ${license}](https://img.shields.io/badge/License-${license.replace(/ /g, '_')}-blue.svg)`;
  }

  // Function to generate a license notice based on the selected license
  function renderLicenseSection(license) {
    if (!license) return 'No license specified';
    return `This project is licensed under the ${license} license.`;
  }

  return `
# ${data.title}

${renderLicenseBadge(data.license)}  ${data.license}

### Description
${data.description}

### Table of Contents
- [Installation](#installation)
- [Test](#test)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Installation
To install run the following commands:
\`\`\`
${data.installation}
\`\`\`

## Test
${data.test}

## Usage
${data.usage}

## Contributing
${data.contributing}

## License
${renderLicenseSection(data.license)}

## Questions
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email} - Feel free to reach out with any additional questions.

`;
}

module.exports = generateMarkdown;
