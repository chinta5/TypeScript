export function decodedResistorValue(colors :string[]):string {
  const a=COLORS.indexOf(colors[0]);
  const b=COLORS.indexOf(colors[1]);
  const c=Math.pow(10,COLORS.indexOf(colors[2]));
  const m=(a*10+b)*c;
  if (m >= 1000000000) {
    return `${m/1000000000} gigaohms`;
  }
  else if (m >= 1000000) {
    return `${m/1000000} megaohms`;
  }
  else  if(m>=1000)
    return `${m/1000} kiloohms`;
  else
  return `${m} ohms`;
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