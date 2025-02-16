
const SVG_COMMANDS = {
  YOUTUBE: 'add-youtube',
  WHATSAPP: 'add-whatsapp'
} as const;


export type SvgCommandKeys = keyof typeof SVG_COMMANDS;
export type SvgCommandValues = (typeof SVG_COMMANDS)[SvgCommandKeys]; 
export default SVG_COMMANDS;

