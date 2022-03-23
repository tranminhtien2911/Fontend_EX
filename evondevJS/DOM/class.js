/**
 * 1. selector.classList.add("abc")
 */
// let container = document.querySelector(".container");

// container.classList.add("is-active");

/**
 * 2. selector.classList.remove("abc")
 */
// container.classList.remove("container");

/**
 * 3. slector.classList.contains("container")
 * Trả về true nếu class đó đã có và trả về false nếu class đó đã bị remove hoặc không có
 */
// console.log(container.classList.contains("container")); //false
// console.log(container.classList.contains("is-active")); //true

//Dùng phủ định
// console.log(!container.classList.contains("container"));// true

/**
 * 4. selector.classList.toggle("is-active");
 * 
 */
// --- Cách check và làm thông thường
// if (container.classList.contains("is-active")){
//     container.classList.remove("is-active")
// }else{
//     container.classList.add("is-active")
// }

// --- Cách dùng toggle
// container.classList.toggle("is-active");

/**
 * 5. selector.classname -> trả ra chuỗi các class của selector
 */
// let title = document.querySelector(".title");
// console.log(title.className); // title heading abc xyz
// Cách để thay thế nhanh các class
// title.className = "title"; // Khi đó class ở h1 chỉ còn title

//menu toggle class
// let menu = document.querySelector(".menu");
// menu.classList.toggle("is-show");