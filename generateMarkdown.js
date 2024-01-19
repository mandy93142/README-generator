// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${data.license}

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
${data.license}

## Questions
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email} - Feel free to reach out with any additional questions.
`;
}

module.exports = generateMarkdown;
