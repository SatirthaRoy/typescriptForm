"use strict";
const h1 = document.querySelector('h1'); // have to use the ! mark to tell ts that i know that it exits
// or
// if(h1) {
//   h1.innerText = 'khankir pola kuttar bacca';
// }
h1.innerText = 'manger nati kuttar bacca';
// when selecting an element by a class or id ts doesnt know what type is the element ... so we have to type cast to let ts to know that its a html element
const header = document.querySelector('.header'); // type casting
header.innerText = 'khankir pola manger beta';
