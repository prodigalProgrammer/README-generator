// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ![License](https://img.shields.io/badge/License-${data.license.replace(
    " ",
    "_"
  )}-blue.svg)

  <details>
  <summary>Table of Contents</summary>
  <ol>
  <li><a href="#description">Description</a></li>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#license">License</a></li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#tests">Tests</a></li>
  <li><a href="#questions">Questions</a></li>
  </ol>
  </details>

  ## Description
  
  ${data.description}
  
  <p align="right">(<a href="#${data.title
    .toLowerCase()
    .replace(" ", "-")}" >Back to top</a>)</p>

  ## Installation
    
  ${data.installation}
    
  <p align="right">(<a href="#${data.title
    .toLowerCase()
    .replace(" ", "-")}" >Back to top</a>)</p>

  ## Usage

  ${data.usage}

  <p align="right">(<a href="#${data.title
    .toLowerCase()
    .replace(" ", "-")}" >Back to top</a>)</p>

  ## License

  Distributed under the ${
    data.license
  } License. See LICENSE.txt for more information.
  
  <p align="right">(<a href="#${data.title
    .toLowerCase()
    .replace(" ", "-")}" >Back to top</a>)</p>

  ## Contributing

  To contribute to this project, please read through the [npm Inquirer Documentation](https://www.npmjs.com/package/inquirer?activeTab=readme) first, then if you feel comfortable helping, I'd like to keep a list of testers for each terminal/OS so I can contact you and get feedback.
  
  <p align="right">(<a href="#${data.title
    .toLowerCase()
    .replace(" ", "-")}" >Back to top</a>)</p>

  ## Tests
  
  No Tests Available right now.

  <p align="right">(<a href="#${data.title
    .toLowerCase()
    .replace(" ", "-")}" >Back to top</a>)</p>

  ## Questions

  This application was developed by ${data.github}. 
  
  Please find the project @[https://github.com/prodigalProgrammer/README-generator](https://github.com/prodigalProgrammer/README-generator)

  For any questions regarding this project please contact the Prodigal Programmer via email (${
    data.email
  })

  <p align="right">(<a href="#${data.title
    .toLowerCase()
    .replace(" ", "-")}" >Back to top</a>)</p>

`;
}

module.exports = generateMarkdown;
