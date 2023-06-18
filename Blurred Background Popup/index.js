const containerEl=document.querySelector(".container");
// console.log(containerEl);

const btnEl =document.querySelector(".btn");
// console.log(btnEl)

 const popupcontainerEl=document.querySelector(".popup-container");
//  console.log(popupcontainerEl)

 const closeiconEl=document.querySelector(".close-icon");
//  console.log(closeiconEl)

btnEl.addEventListener("click",()=>{
    popupcontainerEl.classList.remove("active");
    containerEl.classList.add("active");

});

closeiconEl.addEventListener("click",()=>{
    popupcontainerEl.classList.add("active");
    containerEl.classList.remove("active");
   
});