const SETUP_COMMANDS = {
  INIT: "init",
} as const;
  
  
export type SetupCommandKeys = keyof typeof SETUP_COMMANDS;
export type SetupCommandValues = (typeof SETUP_COMMANDS)[SetupCommandKeys]; 
export default SETUP_COMMANDS;