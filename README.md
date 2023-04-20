# My-Social-Network-API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

### User Story

AS A social media startup,
I WANT an API for my social network that uses a NoSQL database,
SO THAT my website can handle large amounts of unstructured data.

<!-- Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn? -->

## Table of Contents

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)

## Installation

<!-- What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. -->

- Download or clone repository to use this application on local machine.
- `Node.js` and `MongoDB` is required to run the application
- To install necessary dependencies, navigate to the root directory and run the following command: `npm i`
- To start the server navigate to the root directory and run one the following commands:
  - `npm run dev` (for nodemon to run) or
  - `npm run start`.

### Acceptance Criteria

GIVEN a social network API,

- WHEN I enter the command to invoke the application,
  - THEN my server is started and the Mongoose models are synced to the MongoDB database;
- WHEN I open API GET routes in Insomnia for users and thoughts,
  - THEN the data for each of these routes is displayed in a formatted JSON;
- WHEN I test API POST, PUT, and DELETE routes in Insomnia,
  - THEN I am able to successfully create, update, and delete users and thoughts in my database;
- WHEN I test API POST and DELETE routes in Insomnia,
  - THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.
- Application deletes a user's associated thoughts when the user is deleted.

## Usage

- A walkthrough video demonstrating the functionality of the application and all of the acceptance criteria being met:

  -

- The URL of the GitHub repository:
  - https://github.com/ikaera/My-Social-Network-API

<!-- Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax: -->

<!-- ```md
![alt text](assets/images/screenshot.png)
``` -->

## Features

- JavaScript
- Day.js
- Express.js
- Node.js
- MongoDB
- Mongoose
- Insomnia

## Credits

I got help from TA and Tutor.

<!-- List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well. -->

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
​

### MIT License

Copyright (c) [2023] [Irakli Eradze]
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
​

---

<!-- 🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections. -->

<!-- ## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time. -->

<!-- If your project has a lot of features, list them here. -->

<!-- ## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer. -->

## Tests

Insomnia is used to test REST API calls.
Please see the walk-through demonstration videos:

- .
