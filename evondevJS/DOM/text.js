/**
 * 1. textContent 
 * Trả về nội dung nằm giữa tag (selector)
 * Có khoảng trắng ở 2 bên, lấy được tất cả nội dung kể cả nội dung đó là display: none
 */
let spinner = document.querySelector("#spinner");
// Có thể thay đổi nội dung đoạn text
// spinner.textContent = "Hello new conttent"
// console.log(spinner.textContent);

/**
 * 2. innerText
 * Nó loại bỏ hết khoảng trắng ở 2 bên và những cái xuống dòng ở trong vscode
 * Nó ko tác dụng với nội dung là display; none;
 */
 console.log(spinner.textContent);

 /**
  * 3. innerHTML -> Lấy ra nội dung của selector bao gồm cả HTML
  */
 console.log(spinner.innerHTML);
 // parse
 spinner.innerHTML=`<div class="demo"> hello html</div>`