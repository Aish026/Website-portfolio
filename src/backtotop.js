export default function backtotop(){

const btn=document.querySelector(".back-top");

if(!btn) return;

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

btn.classList.add("show");

}else{

btn.classList.remove("show");

}

});

}