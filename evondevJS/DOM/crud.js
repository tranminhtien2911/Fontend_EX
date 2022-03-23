/**
 * Thêm sửa xóa node trong javascript
 */
// 1. Tạo ra Element trong Javascript: document.createElement("tag")
let div = document.createElement("div");

// 2. selector.appendChild
// document.body -> thẻ body
// document.querySelector("body")
let body = document.body;
body.appendChild(div);
div.classList.add("container");
div.className = "container wrapper";
div.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eaque atque id dolor quia, ab doloremque ipsam esse fugit et, sunt ex consequuntur mollitia alias. Suscipit eos quae veritatis recusandae!";
div.innerHTML = `<div class="content"><h3></h3> </div>`
div.setAttribute("data-name", "evondev");