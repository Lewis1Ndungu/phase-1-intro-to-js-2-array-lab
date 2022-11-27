// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}
function destructivelyPrependCat(name) {
  cats.unshift(name);
}
function destructivelyRemoveLastCat() {
  cats.pop();
}
function destructivelyRemoveFirstCat() {
  cats.shift();
}
function appendCat(name) {
  return [...cats, name];
}
function prependCat(name) {
  return [name, ...cats];
}
function removeLastCat() {
  return [...cats.slice(0, cats.length - 1)];
}
function removeFirstCat() {
  return [...cats.slice(1)];
}
function prependKitten(name){
  var name_2=[name, ...kittens];
  return name_2
}

function removeLastKitten(){
  var caats= kittens.slice(0,kittens.length-1);
  return caats;
}

function removeFirstKitten(){
  var catts= kittens.slice(1)
  return catts
}