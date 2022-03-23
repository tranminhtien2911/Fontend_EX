/**
 * 1. DOM là gì ?
 * Document Object Model
 * DOM attribute
 * DOM node
 */
/**
 * 2. Selecting Node
 */
/* 2.1 document.querySelector("selector")-> Trả về 1 node nếu tồn tại
    Ngược lại (không có) thì sẽ trả về null
*/
//.header, p,body,#heading
let singleNode = document.querySelector('h1');
let singleNode2 = document.querySelector('.container');
let singleNode3 = document.querySelector('#spinner');
let singleNode4 = document.querySelector('.container .heading');
console.log(singleNode4);

/* 2.2 document.querySellectorAll("selector") -> trả về một NodeList
chứa danh sách các node, nếu không có thì trả về empty
-> Nó có thể loop và sử dụng: forEach
-> Nó giống array là có thể loop nhưng không sử dụng được các phương pháp như push, pop, shift
*/
let multiNodes = document.querySelectorAll(".item");
console.log(multiNodes);

/* 2.3  docyment.getElementsByClassName("classname") -> trả về một HTMLCollectior
chứa danh sách các nodes, nếu không có giá trị trả về empty []
*/

let classNodes = document.getElementsByClassName("item");
console.log(classNodes);

/* 2.4 document.getElementByTagName("tagName") -> trả về một HTMCOllrction
chứa danh sách các node, nếu không có thì sẽ trả về empty [] 
*/
let tagName = document.getElementsByTagName("li");
console.log(tagName);

/* 2.5 document.getElementById("id") -> trả về một node
*/

// let idNode = document.getElementById("spinner");
let idNode = document.querySelector("#spinner");
// Hay dùng nhất document.querySelector(tag, class, id).
// documnet.querySelectorAll(tag, class)
console.log(idNode);