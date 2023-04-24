// Using if/else statements and strict equality operators, JS code in a script tag that compares two sets of two values. 

// Print true if at least one of the pairs is truthy.


// Both pairs match; Showing True
const param1A = "cat";
const param1B = "cat";

const param2A = 6;
const param2B = "6";

if ( param1A == param1B && param2A == param2B) {
    console.log(true);
} else {
    console.log(false);
}

// Both pairs are mismatched; Showing False
const param1C = "five";
const param1D = 5;

const param2C = "dog";
const param2D = "dawg";

if ( param1C == param1D && param2C == param2D) {
    console.log(true);
} else {
    console.log(false);
}

// "param2E" and "param2F" match with the other mismatched; Showing True
const param1E = 0;
const param1F = false;

const param2E = "horse";
const param2F = "horse";

if ( param1E == param1F && param2E == param2F) {
    console.log(true);
} else {
    console.log(false);
}

// Both pairs match; Showing True
const param1G = "eight";
const param1H = "eight";

const param2G = "ate";
const param2H = "ate";

if ( param1G == param1H && param2G == param2H) {
    console.log(true);
} else {
    console.log(false);
}

// "param1I" and "param1J" are the same but "param2I" and "param2J" are mismatched; Showing False 
const param1I = 11;
const param1J = "eleven";

const param2I = "four";
const param2J = "for";

if ( param1I == param1J && param2I == param2J) {
    console.log(true);
} else {
    console.log(false);
}

// Both pairs match ; Showing True
const param1K = "cake";
const param1L = "cake";

const param2K = "pie";
const param2L = "pie";

if ( param1K == param1L && param2K == param2L) {
    console.log(true);
} else {
    console.log(false);
}