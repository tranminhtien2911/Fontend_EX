/**
 * Truy xuất các phần tử trong DOM, phia trước phía sau
 */
// 1. parentNode, parentElement, removeChild
// parentNode vs parentElement

let span = document.querySelector("span");
console.log(span.parentNode); 
console.log(span.parentElement.parentElement);
//-. Ra kết quả như nhau, chấm 1 lần ra cha, chấm 1 lần nữa ra ông nội,....

//selector.parentNode hoặc selector.parentElement.removeChild()
// span.parentNode.removeChild(span); // dược sử dụng nhiều hơn
// span.remove();

//2. nextElementSibling; tìm pphaanf tử kế tiếp vs previousElementSibling: tìm phần tử đứng sau nó
let nextSpan = span.nextElementSibling;
console.log(nextSpan);

let previousLink = span.previousElementSibling;
console.log(previousLink);

// 3.  - childNodes: trả về hết các Node bên trong bao gồm textNodes
//  - children: trả về các node không bao gồm textNodes
console.log(span.childNodes);
/*
NodeList(3) [text, strong, text]
*/
console.log(span.children);
/*
 HTMLCollection [strong]
 */

 // 4. firstChild vs firstElementChild

console.log(span.firstChild); //text
console.log(span.firstElementChild); //strong

// 5. lastChild vs lastElementChild
console.log(span.lastChild); //text
console.log(span.lastElementChild);// strong

// 6. nextSibling vs priviousSibling
console.log(span.nextSibling);
console.log(span.previousSibling); 
