"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
const a = "lê";
const b = "vương";
const name = "Lê văn vương";
const age = 17;
const status = true;
const info = {
    id: 1,
    name: "vuong"
};
const stringArr = ['a', 'b'];
const objectArr = [{ id: 1 }, { id: 2 }];
function show(a, b) {
    console.log(a + b);
}
show(a, b);
document.querySelector('#h2').innerHTML = name;
document.querySelector('#h3').innerHTML = age;
document.querySelector('#h4').innerHTML = stringArr;
//  document.querySelector('#h5').innerHTML=objectArr;
