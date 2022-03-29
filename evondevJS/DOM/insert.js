/**
 * 1. insertAdjacentText
 */
let h3 = document.querySelector("h3");

// h3.insertAdjacentText("position", "text")
// position: beforebegin, afterbegin, beforeend, afterend
h3.insertAdjacentText("beforebegin", "begin");
h3.insertAdjacentText("afterbegin", "afterbegin");
h3.insertAdjacentText("beforeend", "beforeend");
h3.insertAdjacentText("afterend", "afterend");

/**
 * 2. insertAdjacentElement(positon, node)
 */
let strong = document.createElement("strong");
strong.classList.add("bold");
h3.insertAdjacentElement("beforeend", strong);

/**
 * 3. element.insertAdjacentHTML
 */

let tempalte = `
    <ul class="menu2">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    </ul>

`;
document.body.insertAdjacentHTML("beforeend",tempalte);