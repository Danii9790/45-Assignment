let apple ="apple";
let UppercaseApple="APPLE";
let ten=10;
let Twenty=20;
let fruits=['Apple','Mango','Banana','Orange'];
//Test for Equality and un Equality
console.log("Is Apple is Equal to Apple?");
console.log(apple =="apple");

//Test using Lowercase
console.log("\nIs apple is not Equal tO apple?")
console.log(apple!="apple");
console.log("\nIs Apple is Equal to apple After converting to lowercase");
console.log(UppercaseApple.toLowerCase()=="apple");

console.log("\nIs Apple is not Equal to apple After converting to lowercase");
console.log(UppercaseApple.toLowerCase()!="apple")
//Numerical Test
console.log("\nIs Ten is Equal tO Twenty? ");
console.log(ten==Twenty); 

console.log("\n Is Ten is not Equal tO twenty?");
console.log(ten!=Twenty);

console.log("\n Is 10 is Greater than Twenty");
console.log(10>Twenty);

console.log("\n Is Ten is less than 20?");
console.log(ten<20);

console.log("\nIs Ten is Equal to or greater than 5?");
console.log(ten>=5);

console.log("\n Is Twenty is less than or Equal to 10?");
console.log(Twenty<=10);

//Test using "and" ,"or" 
console.log("\n Twenty is greater than 10 and Twenty is not Equal to 10?");
console.log(Twenty>10 && Twenty !=10);

console.log("\n Twenty is greater than 30 and Twenty is not Equal to 10?");
console.log(Twenty>30 &&Twenty!=10);
//Using "OR"
console.log("\n Twenty is greater than 10 or Twenty is Equal to 10?");
console.log(Twenty>10||Twenty==10);


console.log("\n Twenty is greater than 20 or Twenty is not Equal to 20?");
console.log(Twenty>20||Twenty!=20);

//Test whether an item is in a array
console.log("\nIs Mango is include in my fruits array?");
console.log(fruits.includes("Mango"));

console.log("\nIs Mango is not include in my fruits array?");
console.log(!fruits.includes("Mango"));
