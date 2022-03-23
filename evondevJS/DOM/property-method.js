/**
 * 1. selector.getAttribute("attribute")
 * attribute là thuộc tính -> href, id, class, src, style
 * 
 */
let link = document.querySelector(".link");
console.log(link.getAttribute("href"));

let li = document.querySelectorAll(".item");
li.forEach(item => {
    console.log(item.getAttribute("class"))
})
console.log(li)

/**
 * 2. selector.setAttribute("attribute" value)
 * Set giá trị cho attribute nào đó của selector
 */
link.setAttribute("target", "_blank");
let a_tag = document.querySelectorAll("a.link")
a_tag.forEach(item => {
    item.setAttribute("target", "blank");
})

/**
 * 3. selector.removeAttribute("attribute") -> Xóa attribute
 */
let p = document.getElementById("spinner");
p.removeAttribute("style")

/**
 * 4. hasAttribute("attribute") -> Kiểm tra selector có attribute bào đó hay không
 * Nếu có thì sẽ trả về true , không có sẽ trả về false
 */

console.log(p.hasAttribute("class")); // false
console.log(p.hasAttribute("id")); // true
