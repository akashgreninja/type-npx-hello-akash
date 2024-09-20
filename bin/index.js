#!/usr/bin/env node
const fs = require('fs');
const path = require('path');


const asciiArtFilePath = path.join(__dirname, './check.txt');
const asciiArt = fs.readFileSync(asciiArtFilePath, 'utf-8');
// ANSI escape codes for color formatting
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    cyan: '\x1b[36m',
    magenta: '\x1b[35m',
    bold: '\x1b[1m'
  };
  
  console.log(colors.green + "Hello from Akash Uday Hulekal !" + colors.reset);
  
  console.log(colors.green + "I am a developer from India " + colors.reset);
   console.log(colors.green + "I work at F5 Networks" + colors.reset);
  console.log(colors.green + "My hobbies include jogging, talking about cricket, Marvel, and DC." + colors.reset);
  
  console.log(colors.yellow + "\nHere are some more details about me:" + colors.reset);
  
  console.log(colors.cyan + "- 🔭 I’m currently working on Golang " + colors.reset);
  console.log(colors.cyan + "- 📫 I have a reputation of 611 on Stack Overflow and am in the top 6% of contributors worldwide in 2023." + colors.reset);
  console.log(colors.cyan + "- 📫 I am ranked 200,000 on LeetCode and striving to improve." + colors.reset);
  console.log(colors.cyan + "- 🌱 I’m currently learning concepts of Networking" + colors.reset);
  console.log(colors.cyan + "- 👯 I’m looking to collaborate on projects involving core concepts whichever field it might be" + colors.reset);
  console.log(colors.cyan + "- 👯 I’m aiming to enhance my skills in hackathons and problem solving." + colors.reset);
  console.log(colors.cyan + "- 💬 Ask me anything; I'm here to help." + colors.reset);
  console.log(colors.cyan + "- 📫 How to reach me: akashuhulekal@gmail.com" + colors.reset);
  
  // ASCII art
  console.log(colors.magenta + colors.bold + "\n\n,;;;;;;,            ;` ;;;;;;;;;;;;;;;;;;;;  ;;        ;;");
  console.log(asciiArt);
