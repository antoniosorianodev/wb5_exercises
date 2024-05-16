"use strict"

let cart = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Giant Chewy Nerds", price: 6.00 },
    { product: "Snickers Bar", price: 1.89 },
    { product: "Mounds Bar", price: 1.50 },
    { product: "Sour Patch Kids", price: 3.79 },
    { product: "Everlasting Gobstopper", price: .99 },
    { product: "Ring Pop", price: 1.79 }
];

let under4 = cart.filter(arrayItem => (arrayItem.price <= 4));

// This block, when uncommented, does the same thing as line 16
// let under4 = cart.filter((arrayItem) => {
//     if (arrayItem.price <= 4) {
//         return true;
//     } else {
//         return false;
//     }
// });

console.log(under4);
console.log("---------------------------------");

let eminem = cart.filter(arrayItem => (arrayItem.product.indexOf("M&M") !== -1));

// This block, when uncommented, does the same thing as line 29
// let eminem = cart.filter((arrayItem) => {
//     if (arrayItem.product.indexOf("M&M") !== -1) {
//         return true;
//     } else {
//         return false;
//     }
// });

console.log(eminem);
console.log("---------------------------------");

let carryFish = cart.find(arrayItem => (arrayItem.product === "Swedish Fish"));

// This block, when uncommented, does the same thing as line 44
// let carryFish = cart.find((arrayItem) => {
//     if (arrayItem.product === "Swedish Fish") {
//         return true;
//     } else {
//         return false;
//     }
// });


(carryFish) ? console.log("Yeah, we have 'em") : console.log("Keep it moving buddy, we don't have it");

// This block, when uncommented, does the same thing as line 56
// if (carryFish) {
//     console.log("Yeah, we have 'em");
// } else {
//     console.log("Keep it moving buddy, we don't have it");
// }