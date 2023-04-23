const ham=document.querySelector(".ham")
const service=document.querySelector(".service")
const sublist=document.querySelector(".subList")
const ul=document.querySelector("nav .lists")
service.addEventListener("mouseenter",()=>{
    sublist.classList.toggle("sublistshow")
})

const lies=document.querySelectorAll("nav .lists li")
ham.addEventListener("click",()=>{
    ham.classList.toggle("rotate");
        ul.classList.toggle("listshow");
        lies.forEach(li=>{
            li.classList.toggle("listanimate")
        })
})

function reveal (){
    const reveal=document.querySelectorAll(".reveal")
    const revealside=document.querySelectorAll(".reveals")
    const revealsideRight=document.querySelectorAll(".revealss")
    let wdHT=window.innerHeight;
     reveal.forEach(element=>{
        let elementpos=element.getBoundingClientRect().top;
        if(elementpos<=wdHT/1.3){
        element.classList.add("reveal-active")
        revealside.forEach(r=l=>{
            l.classList.add("reveal-active-side")
        })      
        revealsideRight.forEach(r=>{
            r.classList.add("reveal-active-side-right")
        })  
        }
    })
 
}
document.addEventListener("DOMContentLoaded",reveal);
window.addEventListener("scroll",reveal);

function visible(){
    var previousScroll = window.scrollY;//0
    let header=document.querySelector("header")
    window.addEventListener("scroll",()=>{
    let currentScroll = window.scrollY;
      if (previousScroll > currentScroll) {// 13>0
        header.style.top = "0px";
        header.style.backgroundColor="black"
        header.style.position="fixed"
      } else {
        header.style.top = "-100px";
      }
      previousScroll = currentScroll;//previousScroll=0, currentScroll=
    })
    }
    visible()
