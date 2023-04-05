// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none"){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none"){
    return 
    `## License /n
    /n
    ${data.license}/n`
  }
  return""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
${renderLicenseBadge(data.license)} /n
# ${data.title} /n
/n
## Description /n
/n
${data.description} /n
/n
## Installation /n
/n
${data.installation} /n
/n
## Usage /n
/n
${data.usage} /n
/n
## Contribution Guidelines /n
/n
${data.contribution} /n
/n
## Tests /n
/n
${data.tests} /n
/n
## Questions /n
/n
Contact me by my email or github if you have additional questions /n
${data.email} /n
https://github.com/${data.username} /n
/n
${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
