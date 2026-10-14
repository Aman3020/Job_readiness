let arr = [23, 12, 45, 56, 89, 69];

let len = arr.length;

console.log(len);


for(let i = 0, j= len - 1; i < len/2; i++, j--){  
    let a = arr[i];
    let b = arr[j];

    arr[i] = b;
    arr[j] = a;
}

console.log(arr);


let str = "javascript";

len = str.length;

let map = new Map();

for(let i = 0; i < len; i++){
    if(map.has(str[i])){
        map.set(str[i], map.get(str[i]) + 1);
    }else{
        map.set(str[i], 1);
    }
}

console.log(map);


const users = [
  { name: "Aman", age: 22 },
  { name: "Rahul", age: 25 },
  { name: "Priya", age: 21 }
];



let valid_name = [];

for(let i in users){
    if(users[i].age > 21){
        valid_name.push(users[i].name);
    }
}

console.log(valid_name);


async function getProducts() {
    try {
        const res = await fetch("https://fakestoreapi.com/products");

        if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`);
        }

        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error("Failed to fetch products:", error);
    }
}

getProducts();


console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");


// A, D, C, B -> A, D as they are asynchronous where as C will go to microtask queue
// and B will go to macrotask queue


