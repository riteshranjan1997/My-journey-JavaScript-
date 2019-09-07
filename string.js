// Escaping Literal Quorts in Strings
var myString = "I am a \"double quoted\" string inside \"double quorts";
 // we can do it in other way that is we can start string with single quorts
 var myString = 'I am a "double quoted" string inside "double quorts"';


 // Escape Sequence in Strings
 /*
 code   output
 \'     single quote
 \"     double quote
 \\     backslash
 \n     new line
 \r     carriage return
 \t     tab
 \b     backspace
 \f     form feed
 */

 // Concatenating String with Plus Operator

 var ourstring = "I come first." + "I come second.";
console.log(ourstring)

// we can also do 

ourstring += "I come third.";

// contruction Strings with variables

var myname ="Ritesh";
var name = "Hello, my name is " + ", how are you";
console.log(name)

// Appending Variables to String

// Finding Length of String
var FirstName = "ritesh";
var length;

length = FirstName.length;

console.log(length)

// Indexing of string

var letter;

length = FirstName[0]

// [0] index number or count starts from 0 to any position in the string

// to find last letter of the string 

length = FirstName[FirstName.length - 1]

// we are doing -1 because indix position starts with 0 index
// we can also use this to find second last position of the string and so on

//String Immutability

var mystr = "Jello World";

mystr[0] = "H"; // Fix me //This cannot be done because strings are immutable

// but we can overwrite the variable with new string

