"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//lower case
let personName = "Babar";
console.log("Lowercase:", personName.toLowerCase());
//uppercase
console.log("Uppercase", personName.toUpperCase());
//tittlecase
console.log("Tittlecase:", personName.replace(/\bw/g, c => c.toUpperCase()));
