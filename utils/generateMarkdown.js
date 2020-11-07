// function to generate markdown for README
function generateMarkdown(data,gitHubProfile) {
  return `
  
  # *${data.title}*

  ${data.badge}

  ## Table of Contents

  -[Description](#Description)
  -[Installation](#Installation)
  -[Contributions](#Contributions)
  -[Test](#Test)
  -[GitHub](#Github)

  ## Description
  \`\`\`
  ${data.description}

  ## Installation
  \`\`\`
  ${data.install}

  ## Contributions
  \`\`\`
  ${data.contribution}

  ## Test
  \`\`\`
  ${data.test}

  ##GitHub
  \`\`\`
  -${gitHubProfile.name}
  -${gitHubProfile.profile}
`;
}

module.exports = generateMarkdown;
