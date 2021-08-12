// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      badge = `![MIT](https://img.shields.io/badge/License-MIT-blue.svg)`;
      break;
    case "APACHE 2.0":
      badge = `![APACHE 2.0](https://img.shields.io/badge/License-APACHE-2.0-blue.svg)`;
      break;
    case "GPL 3.0":
      badge = `![GPL 3.0](https://img.shields.io/badge/License-GPL-3.0-blue.svg)`;
      break;
    case "BSD 3":
      badge = `![BSD 3](https://img.shields.io/badge/License-BSD-3-blue.svg)`;
      break;
    case "None":
    default:
      badge = "";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      link = `[MIT](https://opensource.org/licenses/MIT)`;
      break;
    case "APACHE 2.0":
      link = `[APACHE 2.0](http://www.apache.org/licenses/LICENSE-2.0)`;
      break;
    case "GPL 3.0":
      link = `[GPL 3.0](https://opensource.org/licenses/GPL-3.0)`;
      break;
    case "BSD 3":
      link = `[BSD 3](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case "None":
    default:
      link = "";
  }
  return link;
}

// TODO: Create a function that returns the license section of README

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "None") {
    return `## License\n\nThis project is licensed under the ${renderLicenseLink(license)} License`;
  } else {
    return "";
  }
}

// TODO: Create a Table of Contents Function
function renderTableOfContents(data) {
  let table = `## Table of Contents\n\n`;

  if (data.description) {
    table += `- [Description](#description)\n`;
  }

  if (data.languages) {
    table += `- [Languages](#languages)\n`;
  }

  if (data.deployedLink) {
    table += `- [Deployment](#deployment)\n`;
  }

  if (data.installation) {
    table += `- [Installation](#installation)\n`;
  }

  if (data.usage) {
    table += `- [Usage](#usage)\n`;
  }

  if (data.test) {
    table += `- [Test](#test)\n`;
  }

  if (data.license != "None") {
    table += `- [License](#license)\n`;
  }

  if (data.contributing) {
    table += `- [Contributing](#contributing)\n`;
  }

  if (data.github && data.email) {
    table += `- [Questions](#questions)\n`;
  }

  return table;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let text = "";

  if (data.title) {
    text = `# ${data.title}\n\n`;
  }

  if (data.license != "None") {
    text += `${renderLicenseBadge(data.license)}\n\n`;
  }

  text += `${renderTableOfContents(data)}\n`;

  if (data.description) {
    text += `## Description\n\n${data.description}\n\n`;
  }

  if (data.languages) {
    let langList = "";
    data.languages.forEach((language) => (langList += `- ${language}\n`));
    text += `## Languages\n\n${langList}\n`;
  }

  if (data.deployedLink) {
    text += `## Deployment\n\nYou Can Find the [Deployed App Here](${data.deployedLink})\n\n`;
  }

  if (data.installation) {
    text += `## Installation\n\nTo install necessary dependencies, use the following command:\n\n\`\`\`md\n${data.installation}\n\`\`\`\n\n`;
  }

  if (data.usage) {
    text += `## Usage\n\nTo run this application, use the following command:\n\n\`\`\`md\n${data.usage}\n\`\`\`\n\n`;
  }

  if (data.test) {
    text += `## Tests\n\nTo run tests, use the following command:\n\n\`\`\`md\n${data.test}\n\`\`\`\n\n`;
  }

  if (data.license != "None") {
    text += `${renderLicenseSection(data.license)}\n\n`;
  }

  if (data.contributing) {
    text += `## Contributing\n\n${data.contributing}\n\n`;
  }

  if (data.github && data.email) {
    text += `## Questions\n\nIf you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}).\n`;
  }

  return text;
}

module.exports = generateMarkdown;
