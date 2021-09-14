// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
let moreCats = [];
let lessCats = [];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat() {
   moreCats = [...cats, "Broom"];
   return moreCats;
}

function prependCat() {
    moreCats = ["Arnold", ...cats];
    return moreCats;
}

function removeLastCat() {
    lessCats = cats.slice(0, 2);
    return lessCats;
}

function removeFirstCat() {
    lessCats = cats.slice(1);
    return lessCats;
}