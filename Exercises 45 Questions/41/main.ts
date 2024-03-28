//(41)Magicians: Make a array of magician’s names.
// Write a function called make_great() that modifies the array of magician’s names by
//  prepending the phrase the Great to each magician’s name. Call show_magicians() to adding the phrase the Great to each magician’s name. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
console.log('Question(41)')
function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
  }
}
const magicians: string[] = ["ali", "mohammad", "sara"];
show_magicians(magicians);
//(42)Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great
// to each magician’s name. Call show_magicians() to see that the list has actually been modified.
console.log('Question(42)')
function make_great(magician: string[]): void {
  for (let i = 0; i < magician.length; i++) {
    magician[i] = magician[i] + "  great ";
  }
}
const magician2: string[] = ["ali", "hussain", "mohsin"];
make_great(magician2);
show_magicians(magician2);
//(43)Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
// with a copy of the array of magicians’ names. Because the original array will be unchanged,
// return the new array and store it in a separate array. Call show_magicians() with each array to
// show that you have one array of the original names and one array with the Great added to each magician’s name.
console.log('Question(43)')
function make_great2(magician:string[]):string[] {
    const greatMagicians: string[] = [];
for (let i = 0; i < magician.length; i++) {
    greatMagicians.push(magician[i] + "  great ");
  }
  return greatMagicians;
}
const magician3: string[] = ["ali", "hussain", "mohsin"];
const greatMagicians2: string[] = make_great2(magician3);
show_magicians(magician3);
show_magicians(greatMagicians2);

//(44)Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides,
// and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
console.log('Question(44)')
function sandwich(...items: string[]): void {
  console.log("The sandwich order");
  for (let i=0; i<items.length;i++){
    console.log(`-${items[i]}`)
  }
  }

console.log("Enjoy You Sandwich")
sandwich('cheese','egg','bread')
sandwich('cheese', 'chicken')
sandwich('mayo sauce','garlic chicken')
//(45)Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs,
// such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
console.log('Question(45)')
type Car = {
  manufacturer: string;
  model: string;
  [key: string]: any;
}
function create_car(manufacturer: string, model: string,optional:Record<string,any>): Car {
  return {
    manufacturer,
    model,
    ...optional,
  };
}
const my_car: Car = create_car("Toyota", "Corolla",{color:'silver',year:'2023'})
console.log(my_car);
