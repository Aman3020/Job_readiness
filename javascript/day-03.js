/*
const user = {
    name: "Aman",
    age: 22,
    city: "Pune"
};

const { name, age, city } = user;

console.log(name);
console.log(age);
console.log(city);
//renaming while destructuring

const { name: userName, age: userAge } = user;

console.log(userName);
console.log(userAge);

// Nested destructuring

const user2 = {
    name: "Aman",
    address: {
        location: "Pune",
        pincode: 411001
    }
};

const {
    address: { location, pincode }
} = user2;
console.log(location);
console.log(pincode);

// Array destructuring
const nums = [10, 20, 30];

const [a, b, c] = nums;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

const [first, , third] = nums;


//   ------------------------------------------------------------------------------------- Swap variables
let x = 10;
let y = 20;

[x, y] = [y, x];


//  -------------------------------------------------------------------------------------  Spread operator

const user3 = {
    name: "Aman",
    age: 22
};

const updatedUser = {
    ...user3,
    city: "Pune"
};

console.log(updatedUser);

//  -------------------------------------------------------------------------------------   rest parameter

function sum(...numbers) {
    let total = 0;

    for (const num of numbers) {
        total += num;
    }

    return total;
}

console.log(sum(10, 20, 30, 40));




const user = {
    name: "Aman",
    age: 22,
    city: "Pune",
    role: "Developer"
};

const { name, ...rest } = user;

console.log(name);
console.log(rest);

// ------------------------------------------------------------------------------------- Map -> Transforms every element.
const nums = [10, 20, 30];
const squares = nums.map(num => num * num);

console.log(squares);
console.log(nums);

// ------------------------------------------------------------------------------------- Filter -> Keeps elements that satisfy a condition.

const even = nums.filter(num => num > 10);

console.log(even);

// ------------------------------------------------------------------------------------- Reduce -> Reduces the array to a single value.


const sum = nums.reduce((acc, num) => {
    return acc + num;
}, 0);

console.log(sum);

const users = [
    { name: "Aman", age: 22, active: true },
    { name: "Rahul", age: 25, active: false },
    { name: "Priya", age: 21, active: true },
    { name: "Neha", age: 24, active: true }
];

const active_Users = users.filter(users => users.active === true && users.age > 21).map(users => users.name);

console.log(active_Users);


// ------------------------------------------------------ Optional chaining ?.



const user = {};

// console.log(user.address.city); // error

// why it gives undefined here and not error?? 
// console.log(user.address?.city); // undefined 

console.log(user?.address?.city);



// -----------------   Nullish coalescing operator ?? -> ?? falls back only when the left side is: null or undefined

const username = null;

console.log(username ?? "Guest");

// ------------------------------ Logical OR (||) vs Nullish coalescing (??)
console.log(0 || 100);  // 100
console.log(0 ?? 100);  // 0




const user = {
    name: "Aman",
    profile: {
        city: "Pune"
    }
};

function getUserInfo(user) {
    // ...
    const name = user?.name;
    const city = user?.profile?.city;

    return {
        name: name ?? "unknown",
        city: city ?? "unknown"
    };
}

console.log(getUserInfo(user));

*/

const orders = [
    {
        id: 1,
        customer: {
            name: "Aman",
            address: {
                city: "Pune"
            }
        },
        amount: 1200,
        status: "delivered"
    },
    {
        id: 2,
        customer: {
            name: "Rahul"
        },
        amount: 800,
        status: "pending"
    },
    {
        id: 3,
        customer: {
            name: "Priya",
            address: {
                city: "Delhi"
            }
        },
        amount: 1500,
        status: "delivered"
    }
];
const orderedArray = orders
    .filter(({ status }) => status === "delivered")
    .map(({ customer, amount }) => ({
        name: customer?.name ?? "unknown",
        city: customer?.address?.city ?? "unknown",
        amount: amount ?? "unknown"
    }));

console.log(orderedArray);
