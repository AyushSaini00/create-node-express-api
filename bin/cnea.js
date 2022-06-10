#!/usr/bin/env node

const { execSync } = require("child_process");

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/AyushSaini00/create-node-express-api.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

const runCommand = (command) => {
  try {
    execSync(command, { stdio: "inherit" });
    return true;
  } catch (err) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
};

console.log(`Creating a new project with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);

if (!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log(`Congrats, the project is ready.`);
console.log(`cd ${repoName} & run 'npm start' to start the server.`);
