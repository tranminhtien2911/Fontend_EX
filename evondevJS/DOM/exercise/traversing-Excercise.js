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
let tempalte = ` <div class="modal">
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
</div>`;

let body = document.body;
body.insertAdjacentHTML("afterbegin", tempalte );