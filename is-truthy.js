// If the value is truthy, print true;
// If the value is falsy, print the corresponding result:
//          "The boolean value false is falsy";
//          "The null value is falsy";
//          "undefined is falsy";
//          "The number 0 is falsy (the only falsy number)";
//          "The empty string is falsy (the only falsy string)";


let fish = ["I am a string", false, null, undefined, 0, ""];

if (fish) {
    console.log(true);
} else if (fish === false) {
    console.log("The boolean values false is falsy");
} else if (fish === null) {
    console.log("The null values is falsy");
} else if (fish === 0) {
    console.log("The number 0 is falsy (the only falsy number)");
} else if (fish === "") {
    console.log("The empty string is falsy (the only falsy string)");
} else if (fish === undefined) {
    console.log("undefined is falsy");
}




