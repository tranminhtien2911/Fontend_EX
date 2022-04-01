// addEventListener
let button = document.querySelector(".button");
let span =  document.querySelector("span");
// Cách 1
// button.addEventListener("click", function(){
//     console.log("click me");
// })

// Cách 2
function handleClick(){
    console.log("click button");
}
// Lỗi sai khi dùng function vào eventListener
// button.addEventListener("click", handleClick());
// Cách đúng
// button.addEventListener("click", handleClick);
// event: e

// span.addEventListener("click", function(e){
//     // ngăn chặn quá trình nổi bọt
//     // e.stopPropagation();
//     // Chặn tất cả các event còn lại
//     e.stopImmediatePropagation();
//     console.log("click span");
// },{
//     capture: true
// });
// span.addEventListener("click", function(e){
//     e.stopPropagation();
//     console.log("click span 2");
// })


// document.body.addEventListener("click",function(){
//     console.log("click body");
// })

// bubbling: nổi bọt
// sự kiện click chạy từ trong ra ngoài
// target vs currentTarget

button.addEventListener("click", function(event){
    console.log(`event.target: ${event.target}`);
    // event.target : nó sẽ chọn chính xác element mà mình click tới 
    console.log(`event.currentTarget: ${event.currentTarget}`);
    // event.currentTarget: nó sẽ chọn phần tử mà mình click
})

// event.preventDefault();
//Ngăn chặn một hành vi mặc định nào đó
let link = document.querySelector(".link");
link.addEventListener("click", function(event){
    event.preventDefault();
    // console.log("click me");
    // selector.style.property = value
    // event.target.style.property = value

    // console.log(event.target);
    // console.log(event.target.style);
    // event.target.style.color = "red";
    // background-color -> backgroundColor
    // position -> position

    // Lấy custom attribute data-abc
    // event.target.dataset.abc
    let name = event.target.dataset.name;
    console.log(name);
})


