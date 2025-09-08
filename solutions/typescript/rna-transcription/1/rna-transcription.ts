export function toRna(dna:string):string {
  const mapping: Record<string,string>={G: "C", C: "G", T: "A", A: "U" };
  let rna="";
  for(let char of dna){
    if(!(char in mapping))
      throw new Error("Invalid input DNA.");
    else
      rna+=mapping[char];
  }
 return rna;
}
