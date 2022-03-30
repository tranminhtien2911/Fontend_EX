// Viết một function tạo ra thông báo
function createNotification(title="Welcome to notification"){
    let tempalte = `<div class="noti">
    <img src="https://source.unsplash.com/random" alt="" class="noti-image" />
    <div class="noti-content">
      <h3 class="noti-title">${title}</h3>
      <p class="noti-desc">
        Lorem ipsum dolor sit amet consec tetur, adipisicing elit. Quisquam
        dolor sit amet consec
      </p>
    </div>
  </div>`
  document.body.insertAdjacentHTML("afterbegin", tempalte);
}
let randomData = [
    "Welcome to Javascript course",
    "Welcomr to this toturial",
    "Today is a good day",
    "My name is evondev",
    "I am a front developer"
]
let lastTitle
// createNotification();
let timer = setInterval(function(){
    let item = document.querySelector(".noti");
    if(item) item.parentNode.removeChild(item);
    let title = randomData[Math.floor(Math.random() * randomData.length)];
    if(lastTitle !== title){
        createNotification(title);
    }
    lastTitle = title;
}, 5000);