/*
// Global Scope
const name = "Aman";

function greet() {
    console.log(name);
}

greet();

// Functional Scope
function test() {
    const x = 10;
    console.log(x);
}

test();

// console.log(x); 

// Block scope
if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

console.log(c); // 30
// console.log(a); // Error
// console.log(b); // Error

// ---------------------------------------------------------    Lexical Scoping

const x = 10;

function outer() {
    const y = 20;

    function inner() {
        console.log(x);
        console.log(y);
    }

    inner();
}

outer();



// ---------------------------------------------------------    Hoisting
console.log(a);
var a = 20;

console.log(b);

let b = 10;




//  -------------------------------------------     Closures


function outer() {
    let count = 0;

    return function inner() {
        count++;
        console.log(count);
    };
}

const fn = outer();

fn();
fn();
fn();

for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 0);
}


for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 100);
}

this.name = "Raam";

const user = {
    name: "Aman",

    regular: function () {
        console.log(this.name);
    },

    arrow: () => {
        console.log(this.name);
    }
};

user.regular();
user.arrow();


// ---------------------------------------------------------- important
const person = {
    name: "Aman",

    greet() {
        setTimeout(function () {
            console.log(this.name);
        }, 0);
    }
};

person.greet();

const person2 = {
    name: "Aman",

    greet() {
        setTimeout(() => {
            console.log(this.name);
        }, 0);
    }
};



//  prototypes

const animal = {
    speak() {
        console.log("Animal speaks");
    }
};

const dog = animal;

dog.speak();



const user = {
    name: "Aman"
};

console.log(user.hasOwnProperty("name"));
console.log(user.hasOwnProperty("toString"));

*/

function createCounter() {
    // your code

    let count  = 0;

    return function inner() {
        return ++count;
    };
}


const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

const counter2 = createCounter();

console.log(counter2()); // 1
console.log(counter());  // 4