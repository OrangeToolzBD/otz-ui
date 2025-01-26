import SVG_COMMANDS from "./commands/svg-commands";
import { existsSync } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';
import SETUP_COMMANDS from "./commands/setup-commands";
import inquirer from "inquirer";

export default class Otz  { 
  constructor(private command:string){}

  async start() {
    switch (this.command) {
    // setup commands
    case SETUP_COMMANDS.INIT: {
      console.log("Congratulations You integrate OTZ-UI cli in your project");
      const ans = await inquirer.prompt([
        {
          type: 'select',
          name: 'project_type',
          message: 'Please select your project types',
          choices: ["react native", "expo", "react", "nextjs"],
          default: "react native"
        },
        {
          type: 'input',
          name: 'components_path',
          message: 'Type components path to configure config',
          default: "./otz/components"
        },
        {
          type: 'input',
          name: 'utils_path',
          message: 'Type utils path to configure config',
          default: "./otz/utils"
        },
        {
          type: 'input',
          name: 'hook_path',
          message: 'Type hook path to configure config',
          default: "./otz/hook"
        },
        {
          type: 'input',
          name: 'icon_path',
          message: 'Type hook path to configure config',
          default: "./otz/icon"
        },
      ]);
      await this.creteFolder(ans.components_path);
      await this.creteFolder(ans.hook_path);
      await this.creteFolder(ans.icon_path);
      await this.creteFolder(ans.utils_path);
      await this.writeFile('otz.config.json', `${JSON.stringify(ans)}`);
      break;
    }

    // icon command
    case SVG_COMMANDS.PLUS:{
      const configInfo = await this.getConfig("icon_path");
      await this.writeFile(configInfo + "/plus.tsx", `{}`);
      break;
    }
    case SVG_COMMANDS.PLUS_OUTLINE:
      console.log("plus svg commands");
      break;
    default:
      break;
    }
  }


  /**
   * @description this function use for creating folder
   * @param destination string path name 
   * @example path: src/components/etc
   */
  async creteFolder (destination:string) {
    try {
      let pt = process.cwd();
      for (const element of destination.split('/')) {
        pt = path.join(pt, element);
        if (!existsSync(pt)) await fs.mkdir(pt);
      }
    } catch (error) {
      console.log(error);
    }
  }


  /**
   * @description this function use for writing file with data
   * @param filename string
   * @param content string
   */
  async writeFile (filename:string, content:string) {
    try {
      fs.writeFile(filename, content);
    } catch (error) {
      console.log(error);
    }
  }


  /**
   * @
   */
  async getConfig (key: "project_type"|"components_path" | 'components_path'|'hook_path'|'icon_path') {
    try {
      const config = await fs.readFile('otz.config.json', 'utf-8');
      if(config) {
        return JSON.parse(config)[key];
      }
      console.log("Config not found. Please create config file run: npx otz init");
    } catch (error) {
      console.log(error);
    }
  }
};

