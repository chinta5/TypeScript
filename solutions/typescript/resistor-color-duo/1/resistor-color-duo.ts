export function decodedValue(colors:string[]):number {
 const a=COLORS.indexOf(colors[0]);
 const b=COLORS.indexOf(colors[1]);
return a*10+b;
}

export const COLORS: string[]=[
  "black",   
  "brown",   
  "red",     
  "orange",  
  "yellow",  
  "green",   
  "blue",    
  "violet",  
  "grey",    
  "white",
];