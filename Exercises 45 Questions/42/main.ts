function great_magicians(magician:string[]):void{ 
  for(let i=0;i<magician.length;i++) {
        magician[i] = magician[i] +    "  great "
    }
}
const magician2:string[] = ["ali","hussain","mohsin"] 
great_magicians(magician2);
console.log(magician2);