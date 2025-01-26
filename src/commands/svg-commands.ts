
const SVG_COMMANDS = {
  PLUS: "add-plus",
  PLUS_OUTLINE: "add-outline",
} as const;


export type SvgCommandKeys = keyof typeof SVG_COMMANDS;
export type SvgCommandValues = (typeof SVG_COMMANDS)[SvgCommandKeys]; 
export default SVG_COMMANDS;

