//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////

function rand(){
    // const decimal = Math.random();
    // const times21 = decimal * 21;
    const final = Math.floor(Math.random() * 21+1);
    console.log(final);
} 
rand();


// let abc = [alphabet] 
// let random = Letter.random();

function abc(){
let letter = alphabet.charAt(Math.floor(Math.random()* 26))
console.log(letter)
}
abc();