export function isPangram(b: string): boolean  {
  const alpha="abcdefghijklmnopqrstuvwxyz";
  const lower=b.toLowerCase();
  for(const l of alpha){
    if(!lower.includes(l))
    return false;
  }
  return true;
}
