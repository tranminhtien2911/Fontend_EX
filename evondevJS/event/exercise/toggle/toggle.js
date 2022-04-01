let toggle = document.querySelector(".menu-toggle");
let menu = document.querySelector(".menu");
toggle.addEventListener("click", handleToggleMenu);
function handleToggleMenu(e){
    e.preventDefault();
    //toggle có rồi thì nó bỏ, chưa có thì nó thêm vào
    
    menu.classList.toggle("is-show");
}