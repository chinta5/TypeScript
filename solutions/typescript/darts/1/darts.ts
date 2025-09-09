export function score(x: number, y: number): number {
  const d=Math.sqrt(x*x+y*y);
  if(d<=1) return 10;
  else if(d<=5) return 5;
  else if(d<=10) return 1;
  else return 0;
}
