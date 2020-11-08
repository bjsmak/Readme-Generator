// function to generate markdown for README
function generateMarkdown(data,gitHubProfile) {
  return `
  
  ## *${data.title}*

  ${data.badge ==="Apache" ? "## Apache <br> [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" : data.badge ==="MIT" ? " ## MIT <br> [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" : data.badge==="IBM" ? " ## IBM <br> [![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)" : " ## Perl <br> [![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"}

  ## Table of Contents

  -[Description](#Description) <br>
  -[Installation](#Installation) <br>
  -[Contributions](#Contributions) <br>
  -[Test](#Test) <br>
  -[GitHub](#Github) <br>

  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## Contributions
  ${data.contribution}

  ## Test
  ${data.test}

  ## GitHub
  Username: ${gitHubProfile.name} <br>
  Profile Link below <br>
  -${gitHubProfile.profile}
`;
}

module.exports = generateMarkdown;
