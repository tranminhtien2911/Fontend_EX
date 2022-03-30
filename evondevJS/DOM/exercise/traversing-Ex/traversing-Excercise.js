// let modal = document.querySelector(".modal");
// if(modal){
//     setTimeout(function(){
//         modal.classList.add("is-show");
//     }, 3000);
// }
/*
 <div class="modal">
      <div class="modal-content">
        <i class="fa fa-times modal-close"></i>
        <div class="modal-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus enim
          reiciendis minima quidem illum adipisci quae quam veritatis officiis?
          Praesentium non doloribus ducimus libero, saepe mollitia omnis quae id
          fugit?
        </div>
        <div class="modal-action">
            <button class="modal-submit">Confirm</button>
            <button class="modal-cancel" >Cancel</button>
        </div>
      </div>
    </div>

*/
// let tempalte = ` <div class="modal">
// <div class="modal-content">
//   <i class="fa fa-times modal-close"></i>
//   <div class="modal-desc">
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus enim
//     reiciendis minima quidem illum adipisci quae quam veritatis officiis?
//     Praesentium non doloribus ducimus libero, saepe mollitia omnis quae id
//     fugit?
//   </div>
//   <div class="modal-action">
//       <button class="modal-submit">Confirm</button>
//       <button class="modal-cancel" >Cancel</button>
//   </div>
// </div>
// </div>`;

// let body = document.body;
// body.insertAdjacentHTML("afterbegin", tempalte );
// let modal = document.querySelector(".modal");
// if(modal){
//     setTimeout(function(){
//         modal.classList.add("is-show");
//     }, 3000);
// }

let modal = document.createElement("div");
modal.classList.add("modal");
let modalContent = document.createElement("div");
modalContent.classList.add("modal-content");
modal.appendChild(modalContent);
let modalClose = document.createElement("i");
modalClose.className = "fa fa-times modal-close";
let modalDesc = document.createElement("div");
modalDesc.className = "modal-desc";
modalDesc.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus enim reiciendis minima quidem illum adipisci quae quam veritatis officiis ? Praesentium non doloribus ducimus libero, saepe mollitia omnis quae id fugit ? ";
let modalAction = document.createElement("div");
modalAction.className = 'modal-action';
let modalSubmit = document.createElement("button");
modalSubmit.className = "modal-submit";
modalSubmit.textContent = "Confirm";
let modalCancel = document.createElement("button");
modalCancel.className = "modal-cancel";
modalCancel.textContent = "Cancel";


modalAction.appendChild(modalSubmit);
modalAction.appendChild(modalCancel);
modalContent.appendChild(modalClose);
modalContent.appendChild(modalDesc);
modalContent.appendChild(modalAction);
document.body.appendChild(modal);

let body = document.body;
// body.insertAdjacentHTML("afterbegin", tempalte );
let modal2 = document.querySelector(".modal");
if(modal2){
    setTimeout(function(){
        modal.classList.add("is-show");
    }, 3000);
}