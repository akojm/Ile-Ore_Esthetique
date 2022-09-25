const iconCenter = document.getElementById("icon-center")
let iconRight = document.querySelector(".arrow_icon_right")
const iconRightDown = document.querySelector(".down_right")
const iconRightUp = document.querySelector(".up_right")
const iconFooter = document.querySelector(".arrow_icon_header_up")

iconCenter.addEventListener("click", ()=>{
    if (iconCenter) {
        window.scrollTo({
            top: 800,
            behavior : "smooth",
        })
        iconRight.classList.add("active-icon-right")
    }
})

iconRightDown.addEventListener("click",()=>{
   const {scrollTop, scrollHeight, clientHeight} = document.documentElement;

   console.log(scrollTop, scrollHeight, clientHeight);
   if (scroll) {
    
   }
})
/*window.addEventListener("scroll", ()=>{
if (window.scrollY > 797) {
    iconRight.style.display = "block"
}
})*/
