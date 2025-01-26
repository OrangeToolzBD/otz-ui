#!/usr/bin/env node

import SETUP_COMMANDS from "./commands/setup-commands";
import SVG_COMMANDS from "./commands/svg-commands";
import Otz from "./otz";

const main = ()=> {
  // get commands from cli 
  const commands = process.argv.slice(2);

  // checking any command available 
  if(commands.length < 1) {
    console.log("You have no commands");
    console.log("Please enter command like: npx otz-ui add box");
    return;
  }

  // checking valid command 
  if(commands.length >= 1) {
    const command = commands.join("-");
    const allCommands = Object.values({...SETUP_COMMANDS, ...SVG_COMMANDS});
    for (const element of allCommands) {
      if(command === element) {
        // call command executer class
        const otz = new Otz(command);
        otz.start();
        return;
      }
    }
    console.log(`Invalid command. Please enter valid command like: npx otz-ui add box`);
  }
};
main();


