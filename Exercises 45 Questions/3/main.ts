//lower case
let personName:string ="Babar"
console.log("Lowercase:",personName.toLowerCase());
//uppercase
console.log("Uppercase", personName.toUpperCase() );
//tittlecase
console.log("Tittlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));