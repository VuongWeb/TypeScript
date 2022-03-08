"use strict";
exports.__esModule = true;
var a = "lê";
var b = "vương";
var name = "Lê văn vương";
var age = 17;
var status = true;
var info = {
    id: 1,
    name: "vuong"
};
var stringArr = ['a', 'b'];
var objectArr = [{ id: 1 }, { id: 2 }];
function show(a, b) {
    console.log(a + b);
}
show(a, b);
document.querySelector('#h2').innerHTML = name;
document.querySelector('#h3').innerHTML = age;
document.querySelector('#h4').innerHTML = stringArr;
//  document.querySelector('#h5').innerHTML=objectArr;
