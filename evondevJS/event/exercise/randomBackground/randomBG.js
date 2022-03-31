let button = document.querySelector(".change");
button.addEventListener("click", handleChangeColor);
let colors = [
    "#ffa400",
    "#00aefd",
    "#ff6bcb",
    "#07a787",
    "#2979ff",
    "#e74c3c",
    "#3D6EF7",]
function handleChangeColor(event) {
    event.preventDefault();
    // document.body.setAttribute("style", "background-color: red;");
    let check
    let color = colors[Math.floor(Math.random() * colors.length)]
    if(check !== color){
        document.body.style.backgroundColor = color;
    }
    check = color;
}
