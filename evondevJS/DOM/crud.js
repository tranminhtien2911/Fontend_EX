/**
 * Thêm sửa xóa node trong javascript
 */
// 1. Tạo ra Element trong Javascript: document.createElement("tag")
let div = document.createElement("div");
let image = document.createElement("img");

// 2. selector.appendChild
// document.body -> thẻ body
// document.querySelector("body")
// let body = document.body;
// body.appendChild(div);
// div.classList.add("container");
// div.className = "container wrapper";
// div.textContent =
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eaque atque id dolor quia, ab doloremque ipsam esse fugit et, sunt ex consequuntur mollitia alias. Suscipit eos quae veritatis recusandae!";
// div.innerHTML = `<div class="content"><h3></h3> </div>`
// div.setAttribute("data-name", "evondev");
let body = document.body;
body.appendChild(div);
div.appendChild(image);
div.classList.add("card");
// image.setAttribute("src","https://source.unsplash.com/random");
image.setAttribute("class", "card-image");
// image.classList.add("card-image");
// image.innerHTML = `<img src="https://source.unsplash.com/random" alt="" class="card-image">`

/**
 * 3. document.createTextNode
 */
let text = document.createTextNode("Hello my name is Evondev");
let h1 = document.createElement('h1');
body.appendChild(h1);
h1.appendChild(text);

/**
 * 4. cloneNode -> tạo ra bản sao của 1 element nào đó
 */
let h1Clone = h1.cloneNode(1);
body.appendChild(h1Clone)

/**
 * 5. elemant.hasChildNodes -> Kiểm tra có phần tử con hay không, có -> true, không thì trả về false
 */
console.log(h1.hasChildNodes());