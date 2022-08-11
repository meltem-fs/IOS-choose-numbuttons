const buttons = document.querySelector(".main-button");

const submit = document.querySelector(".submit");
const sec1 = document.getElementById("section-1");
const sec2 = document.getElementById("section-2");
const span =document.querySelector(".number4");




buttons.addEventListener("click",(e) => {
  number = e.target.innerHTML;
  

  
  })


submit.onclick = function() {
    sec2.style.display="block"
    sec1.style.display="none"
    span.innerHTML = number;
}




