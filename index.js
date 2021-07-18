const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
}
function destructivelyPrependCat(name) {
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
    return cats.pop(name);
}
function destructivelyRemoveFirstCat(name) {
    return cats.shift(name);
}
function appendCat(name) {
    let moreCats = [...cats, name];
    return moreCats;
}
function prependCat(name) {
    let moreCats = [name, ...cats];
    return moreCats;
}
function removeLastCat() {
    let newArray = cats.slice(0, (cats.length - 1));
    return newArray;
}
function removeFirstCat() {
    let newArray = cats.slice(1, cats.length);
    return newArray;
}