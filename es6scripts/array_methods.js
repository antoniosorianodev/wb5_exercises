"use strict"

let cart = [
    { item: "Bread", price: 3.29, quantity: 2 },
    { item: "Milk", price: 4.09, quantity: 1 },
    { item: "T-Bone Steak", price: 12.99, quantity: 2 },
    { item: "Baking Potato", price: 1.89, quantity: 6 },
    { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
    { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
    { item: "Apples", price: 0.66, quantity: 6 }
];

// part a
let itemNames = cart.map((listItem) => {
    return listItem.item
});

itemNames.forEach((listItem) => {
    console.log(listItem);
});
console.log("--------------------------------------------");

// part b
let totalCost = cart.reduce((currentTotal, listItem) => {
    return currentTotal + (Number(listItem.price) * Number(listItem.quantity));
}, 0);

console.log(totalCost);
console.log("--------------------------------------------");

// part c
itemNames.sort();
itemNames.forEach((listItem) => {
    console.log(listItem);
});
console.log("--------------------------------------------");